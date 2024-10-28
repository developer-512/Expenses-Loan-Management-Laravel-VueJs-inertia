<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\Loans;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $monthlyTotals_q = Expense::select(DB::raw('expense_month, SUM(amount) as total_amount'))
            ->where('expense_year', date('Y'))
            ->groupBy('expense_month')
            ->orderBy('expense_month')
            ->get();
        $monthlyTotals_q_last_year = Expense::select(DB::raw('expense_month, SUM(amount) as total_amount'))
            ->where('expense_year', date('Y',strtotime("-1 year")))
            ->groupBy('expense_month')
            ->orderBy('expense_month')
            ->get();

        $monthlyTotals=[];
        for($i=1;$i<=12;$i++){
            $monthlyTotals[$i]=0;
            $monthlyTotals_last_year[$i]=0;
        }
//        $monthlyTotals_last_year=$monthlyTotals;
        foreach ($monthlyTotals_q as $monthlyTotal) {
            $monthlyTotals[$monthlyTotal->expense_month]=$monthlyTotal->total_amount;
        }
        foreach ($monthlyTotals_q_last_year as $monthlyTotal) {
            $monthlyTotals_last_year[$monthlyTotal->expense_month]=$monthlyTotal->total_amount;
        }
        $totalPayableLoan=Loans::where('borrower',Auth::id())->sum('amount');
        $totalPaidLoan=Loans::where('borrower',Auth::id())->sum('paid_amount');
        $totalPaidPendingLoan=$totalPayableLoan-$totalPaidLoan;
        $totalReceivableLoan=Loans::where('lender',Auth::id())->sum('amount');
        $pending_loan_details=Loans::with(['lender'])->where(function ($query){
            $query->where('status','Paying');
            $query->orWhere('status','Unpaid');
        })->where('borrower',Auth::id())->get();

        //dd($monthlyTotals);
        $output=[
            'monthlyExpenses'=>(array)$monthlyTotals,
            'monthlyExpenses_last'=>(array)$monthlyTotals_last_year,
            'totalPayableLoan'=>$totalPayableLoan,
            'totalReceivableLoan'=>$totalReceivableLoan,
            'totalPaidLoan'=>$totalPaidLoan,
            'totalPaidPendingLoan'=>$totalPaidPendingLoan,
            'pendingLoanDetails'=>$pending_loan_details,];
//        dd($output);
        return Inertia::render('Dashboard',$output);
    }
}
