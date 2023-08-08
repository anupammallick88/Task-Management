<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Projects;
use App\Models\Learnings;
use App\Models\Monetarys;
use App\Models\Platforms;
use App\Models\ProjectDailyReports;
use App\Models\LearningDailyReports;


class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($userId)
    {
        // $userdata = DB::table('users')
        // ->join('projects', 'users.id', '=', 'projects.creator_id')
        // ->join('learnings', 'users.id', '=', 'learnings.creator_id')
        // ->join('projectdailyrport', 'users.id', '=', 'ProjectDailyReports.creator_id')
        // ->join('learningdailyreport', 'users.id', '=', 'learningdailyreport.creator_id')
        // ->select('users.*', 'Project.name as project_name', 'Learning', 'ProjectDailyReport', 'LearningDailyReport')
        // ->where('users.id', $userId)->get();
        // return response()->json(['status' => 200, 'userdata' => $userdata]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
