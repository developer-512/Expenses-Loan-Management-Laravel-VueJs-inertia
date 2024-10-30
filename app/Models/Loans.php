<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;



class Loans extends Model
{
    protected $fillable =['title','lender','borrower','amount','loan_date','payment_date','paid_amount','status'];


    public function lender(): BelongsTo
    {
        return $this->belongsTo(User::class,'lender','id');
    }
    public function borrower(): BelongsTo
    {
        return $this->belongsTo(User::class,'borrower','id');
    }

}
