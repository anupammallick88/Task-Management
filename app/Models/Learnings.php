<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Learnings extends Model
{
    use HasFactory;

    protected $fillable = [
        "subject_title",
        "title",
        "state",
        "deadline",
        "course",
        "description",
        "creator_id",
        "finish_date",
        "accept",
        "progress",
        "started_at",
        "finished_at"
    ];
}
