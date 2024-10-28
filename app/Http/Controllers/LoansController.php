<?php

namespace App\Http\Controllers;

use App\Models\Loans;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class LoansController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $search=[];
        $Loans=Loans::query();
        $Loans=$Loans->with(['lender','borrower']);
        $search['all_loans']=$search['receivable_loans']=$search['my_loans']='';
        if(isset($request->receivable_loans)&&$request->receivable_loans=='true'){
            $search['receivable_loans']='true';
            $Loans=$Loans->where('lender',Auth::id());
        }elseif(isset($request->my_loans)&&$request->my_loans=='true'){
            $search['my_loans']='true';
            $Loans=$Loans->where('borrower',Auth::id());
        }else{
            $search['all_loans']='true';
            $Loans = $Loans->where(function ($query) {
                $query->where('lender', Auth::id())
                    ->orWhere('borrower', Auth::id());
            });
        }


        $is_Searching=false;
        if(isset($request->search_query)&&$request->search_query!=''){
            $search['search_query']=$request->search_query;
//            $Loans=$Loans->whereLike('amount','%'.$search['search_query'].'%');
            $Loans=$Loans->where(function ($query) use ($search) {
                $query->whereLike('amount','%'.$search['search_query'].'%');
                $query->orWhereIn('lender',function ($subQuery) use ($search) {
                    $subQuery->select('id')->from('users')->whereLike('name',$search['search_query'].'%');
                });
                if($search['all_loans']=='true'||$search['receivable_loans']=='true'){
                    $query->orWhereIn('borrower',function ($subQuery) use ($search) {
                        $subQuery->select('id')->from('users')->whereLike('name',$search['search_query'].'%');
                    });
                }

            });
//            $Loans=$Loans->orWhereLike('amount',$search['search_query'].'%');
            $is_Searching=true;
        }
//        if(isset($request->search_expense_year)&&$request->search_expense_year>0){
//            $search['search_expense_year']=$request->search_expense_year;
//            $Loans=$Loans->where('expense_year',$search['search_expense_year']);
//            $is_Searching=true;
//        }
        $loans=$Loans->paginate(10);
//echo $Loans->toRawSql();exit;
        return Inertia::render('Loans/Index', ['loans' => $loans,'search'=>$search,'is_Searching'=>$is_Searching]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): Response
    {
        $loan_taker=($request->loan_taking&&$request->loan_taking=='true');
        $users=User::where('id','!=',Auth::id())->get();
        return Inertia::render('Loans/Create',['users'=>$users,'LoanTaker'=>$loan_taker]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $data=$request->all();
       if($data['lender']==null){
           $data['lender']=Auth::id();
       }elseif ($data['borrower']==null){
           $data['borrower']=Auth::id();
       }
//                dd($data);
        $Loan=new Loans($data);
       $Loan->save();
       return Redirect::route('loans.index');


    }

    /**
     * Display the specified resource.
     */
    public function show(Loans $loans)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Loans $loan): Response
    {
        $users=User::where('id','!=',Auth::id())->get();
        $loan->load(['lender','borrower']);
        return Inertia::render('Loans/Create',['users'=>$users,'loan'=>$loan,'isUpdating' => true]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Loans $loan): RedirectResponse
    {
//        dd($request->all());
        $loan->update($request->all());
        return Redirect::route('loans.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Loans $loan): RedirectResponse
    {
        $loan->delete();
        return Redirect::route('loans.index');
    }
}
