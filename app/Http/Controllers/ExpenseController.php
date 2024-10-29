<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use JetBrains\PhpStorm\NoReturn;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $search=[];
        $Expenses=Expense::query();
        $Expenses=$Expenses->with(['user']);
            if(isset($request->all_expenses)&&$request->all_expenses=='true'){
                $search['all_expenses']='true';
                $Expenses = $Expenses->where(function ($query) {
                    $query->where('user_id', Auth::id())
                        ->orWhereIn('id', function ($subQuery) {
                            $subQuery->select('expense_id')
                                ->from('expense_user')
                                ->where('user_id', Auth::id());
                        });
                });
            }else{
                if(isset($request->shared_expenses)=='true'){
                    $search['shared_expenses']='true';
                    $Expenses=$Expenses->WhereIn('id',function ($query){
                        $query->select('expense_id')->from('expense_user')->where('user_id',Auth::id());
                    });
                }else{
                    $Expenses=$Expenses->where('user_id',Auth::id());
                }
            }



        $is_Searching=false;
        if(isset($request->search_query)&&$request->search_query!=''){
            $search['search_query']=$request->search_query;
            $Expenses=$Expenses->whereLike('title','%'.$search['search_query'].'%');
            $Expenses=$Expenses->orWhereLike('amount',$search['search_query'].'%');
            $is_Searching=true;
        }
        if(isset($request->search_expense_year)&&$request->search_expense_year>0){
            $search['search_expense_year']=$request->search_expense_year;
            $Expenses=$Expenses->where('expense_year',$search['search_expense_year']);
            $is_Searching=true;
        }
        if(isset($request->search_expense_month)&&$request->search_expense_month>0){
            $search['search_expense_month']=$request->search_expense_month;
            $Expenses=$Expenses->where('expense_month',$search['search_expense_month']);
            $is_Searching=true;
        }

//echo $Expenses->toRawSql();exit;
        $expenses = $Expenses->orderByDesc('id')->paginate(20);//Auth::user()->expenses;

//        foreach ($expenses as $expense) {
//            var_dump($expense->receipt_url);
//        }
//        dd($expenses);
        return Inertia::render('Expenses/Index', ['expenses' => $expenses,'search' => (object)$search,'is_Searching'=>$is_Searching]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): Response
    {

        $users=User::where('id','!=',Auth::id())->get();
        return Inertia::render('Expenses/Create',['users'=>$users]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
//        dd($request->all());
        if($request->file('receipt')){
            $path = Storage::putFile('receipts/user_'.Auth::id(), $request->file('receipt'));
        }
        $expense=new Expense($request->all());
        $expense->user_id=Auth::id();
        $expense->receipt=$path??'';
        $expense->save();
        $expense->shared()->sync($request->shared??[]);
//        Auth::user()->expenses()->create($request->except('_token'));
        return Redirect::route('expenses.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Expense $expense)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Expense $expense): Response
    {
        $users=User::where('id','!=',Auth::id())->get();
        return Inertia::render('Expenses/Create', ['expense' => $expense,'isUpdating' => true,'users'=>$users]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Expense $expense)
    {
//        dd([$request->all(),$expense->title]);
        $expense->update($request->except(['_token','receipt']));
        if($request->file('receipt')){
            $path = Storage::putFile('receipts/user_'.Auth::id(), $request->file('receipt'));
            $expense->update(['receipt'=>$path??'']);
        }

        $expense->shared()->sync($request->shared??[]);
        return Redirect::route('expenses.index');
    }
    public function duplicate()
    {
        $current_month=date('m');
        $current_year=date('Y');
        $currentMonthExpenses=Expense::with(['shared','user'])
            ->where('user_id', Auth::id())
            ->where('expense_month',$current_month)
            ->where('expense_year',$current_year)
            ->get();
        foreach ($currentMonthExpenses as $currentMonthExpense) {
            $newMonthExpense=$currentMonthExpense->replicate();
            $newMonthExpense->expense_month=($currentMonthExpense->expense_month<12?$currentMonthExpense->expense_month+1:1);
            if($newMonthExpense->expense_month==12){
                $newMonthExpense->expense_year=$currentMonthExpense->expense_year+1;
            }
            $newMonthExpense->save();
        }
//        dd($currentMonthExpenses);
        return Redirect::route('expenses.index');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Expense $expense): RedirectResponse
    {
        $expense->delete();
        return Redirect::route('expenses.index');
    }

    public function payed(Request $request, Expense $expense): void
    {
        $expense->update(['payed'=>($expense->payed==1)?0:1]);
    }

    public function autocomplete(Request $request)
    {
        $query = $request->get('query');
        $results = Expense::where('user_id', Auth::id())->whereLike('title',"%{$query}%")->limit(10)->get();
        $return=[];
        foreach ($results as $result) {
            $return[]=$result->title;
        }
        return response()->json($return);
    }
}
