<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DiaryEntries extends Model
{
    protected $table = 'diary_entries';
    protected $fillable = ['title', 'content'];
}