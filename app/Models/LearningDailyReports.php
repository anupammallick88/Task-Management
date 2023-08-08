<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LearningDailyReports extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "learning_id",
        "creator_id",
        "post",
        "progress"
    ];
}