<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Storage;

class Expense extends Model
{
    protected $fillable =['title','amount','expense_date','payable','payed','type','expense_month','expense_year','user','receipt'];
    protected $appends = ['full_receipt_path'];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
    public function shared(): BelongsToMany
    {
        return $this->belongsToMany(User::class,'expense_user')->withTimestamps();
    }
    public function getReceiptUrlAttribute(): ?string
    {
        return $this->receipt ? Storage::url($this->receipt) : null;
    }
    protected function fullReceiptPath(): Attribute
    {
        return new Attribute(
            get: fn () => $this->receipt?Storage::url($this->receipt):null,
        );
    }
}
