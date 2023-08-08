<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Learnings;

class LearningController extends Controller
{
    public function index()
    {
        $learning = Learnings::orderBy('updated_at', 'DESC')->get();
        // return response()->json(['status' => 200, 'learnings' => $learnings]);
        return view('/dashboard', ['learning' => $learning]);
    }

    public function getLearning($userid)
    {
        $learning = DB::table('Learnings')->where('creator_id', $userid)->where('state', "inprogress")->get();
        return response()->json(['status' => 200, 'learning' => $learning]);
    }

    public function getUserFullLearnings($userId)
    {
        $learnings = DB::table('Learnings')->where('creator_id', $userId)->orderBy('updated_at', 'DESC')->get();
        return response()->json(['status' => 200, 'Learnings' => $learnings]);
    }

    public function getLearningIdByUserId($userId)
    {
        $learningIdList = DB::table('Learnings')->where('creator_id', $userId)->get('id');
        return response()->json(['status' => 200, 'learningIdList' => $learningIdList]);
    }

    /**
     * Display in progress learnings
     */
    public function getLearningNow($userid)
    {
        $learningnows = Learnings::where('creator_id', '=', $userid)->where('state', 'inprogress')->get();
        return response()->json(['status' => 200, 'learningnows' => $learningnows]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $newLearning = Learnings::create([
            "subject_title" => $request->subject_title,
            "title" => $request->title,
            "course" => $request->course,
            "deadline" => $request->deadline,
            "description" => $request->description,
            'creator_id' => $request->userid,
        ]);
        if ($newLearning) {
            return response()->json(["status" => 200]);
        }
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        $Learnings = Learnings::find($id);
        return response()->json(['status' => 200]);
    }

    public function update(Request $request, $id)
    {
        $learnings = Learnings::find($id);

        $learnings->title = $request->title;
        $learnings->subject_title = $request->subject_title;
        $learnings->course = $request->course;
        $learnings->deadline = $request->deadline;
        $learnings->description = $request->description;
        if ($learnings->save()) {
            return response()->json(["status" => 200]);
        }
    }

    public function destroy($id)
    {
        $learnings = Learnings::find($id);
        if ($learnings->delete()) {
            return response()->json(["status" => 200]);
        }
    }
}
