<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectDailyReports extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "project_id",
        "creator_id",
        "post",
        "progress"
    ];
}
