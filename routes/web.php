<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\LoansController;
use App\Http\Controllers\ProfileController;
use App\Models\Expense;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});
Route::redirect('/', '/dashboard');

Route::get('/dashboard', [DashboardController::class,'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('expenses', ExpenseController::class);
    Route::patch('/expenses/{expense}/payed', [ExpenseController::class, 'payed'])->name('expenses.payed');
    Route::get('/expenses/shared', [ExpenseController::class, 'index'])->name('expenses.shared');
    Route::get('/expenses/all', [ExpenseController::class, 'index'])->name('expenses.all');
    Route::get('expenses_duplicate', [ExpenseController::class, 'duplicate'])->name('expenses.duplicate');
    Route::post('expenses_update/{expense}', [ExpenseController::class, 'update'])->name('expenses.update_expenses');
//    Route::get('/expenses/expense_autocomplete', [ExpenseController::class, 'expense_autocomplete'])->name('expenses.autocomplete');
    Route::get('autocomplete', [ExpenseController::class, 'autocomplete'])->name('autocomplete');
    Route::resource('loans',LoansController::class);

});

require __DIR__.'/auth.php';
