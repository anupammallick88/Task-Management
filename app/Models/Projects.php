<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "budget",
        "deadline",
        "client_name",
        "platform",
        "partner",
        "description",
        "creator_id",
        "type",
        "accept",
        "state",
        "progress",
        "started_at",
        "finished_at"
    ];
}
