<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Projects;
use App\Models\Learnings;
use App\Models\ProjectDailyReports;
use App\Models\LearningDailyReports;

class DailyReportController extends Controller
{
    public function addProjectDailyReport(Request $request, $projectid)
    {
        $newProjectDailyReport = ProjectDailyReports::create([
            'name' => $request->postname,
            'project_id' => $projectid,
            'creator_id' => $request->userid,
            'progress' => $request->projectprogress,
            'post' => $request->projectdailyreport,
        ]);

        $projectnow = Projects::find($projectid);
        if ($projectnow) {
            $projectnow->progress = $request->projectprogress;
            $projectnow->save();
        }

        if ($newProjectDailyReport) {
            return response()->json(["status" => 200]);
        }
    }

    public function addLearningDailyReport(Request $request, $learningid)
    {
        $newLearningDailyReport = LearningDailyReports::create([
            'name' => $request->postname,
            'learning_id' => $learningid,
            'creator_id' => $request->userid,
            'progress' => $request->learningprogress,
            'post' => $request->learningdailyreport,
        ]);

        $learningnow = Learnings::find($learningid);
        if ($learningnow) {
            $learningnow->progress = $request->learningprogress;
            $learningnow->save();
        }

        if ($newLearningDailyReport) {
            return response()->json(["status" => 200]);
        }
    }

    public function getProjectDailyReportsByProjectId($projectId)
    {
        $projectDailyReports = ProjectDailyReports::where('project_id', $projectId)->get();
        return response()->json(["status" => 200, 'projectDailyReports' => $projectDailyReports]);
    }

    public function getLearningDailyReportsBylearningId($learningId)
    {
        $learningDailyReports = LearningDailyReports::where('learning_id', $learningId)->get();
        return response()->json(["status" => 200, 'learningDailyReports' => $learningDailyReports]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
