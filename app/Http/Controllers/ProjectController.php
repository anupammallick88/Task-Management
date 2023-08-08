<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Projects;
use App\Models\Platforms;
use App\Models\Monetarys;

class ProjectController extends Controller
{
    public function index()
    {
        $project = Projects::orderBy('updated_at', 'DESC')->get();
        // return response() -> json(['status' => 200, 'projects'=>$projects]);
        return view('/dashboard', ['project' => $project]);
    }

    public function getProject($userid)
    {
        $project = DB::table('Projects')->where('creator_id', $userid)->where('state', "inprogress")->get();
        return response()->json(['status' => 200, 'project' => $project]);
    }

    public function getUserFullProjects($userId)
    {
        $projects = DB::table('Projects')->where('creator_id', $userId)->orderBy('updated_at', 'DESC')->get();
        return response()->json(['status' => 200, 'Projects' => $projects]);
    }

    public function getProjectIdByUserId($userId)
    {
        $projectIdList = DB::table('Projects')->where('creator_id', $userId)->get('id');
        return response()->json(['status' => 200, 'projectIdList' => $projectIdList]);
    }

    /**
     * Display in progress projects
     */
    public function getProjectNow($userid)
    {
        $projectnows = Projects::where('creator_id', '=', $userid)->where('state', 'inprogress')->get();
        return response()->json(['status' => 200, 'projectnows' => $projectnows]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $partner = $request->partner;
        $partnerlength = count($request->partner);
        $partners = $partner[0]['value'];
        for ($i = 1; $i < $partnerlength; $i++) {
            $partners = $partners . ',' . $partner[$i]['value'];
        }

        $platform = $request->platform[0]['label'];
        $monetary = $request->monetary[0]['label'];
        $newProject = Projects::create([
            'name' => $request->name,
            'budget' => $request->budget,
            'monetary' => $request->monetary,
            'deadline' => $request->deadline,
            'client_name' => $request->client_name,
            'platform' => $platform,
            'partner' => $partners,
            'description' => $request->description,
            'creator_id' => $request->userid,
            'type' => $request->type,
        ]);

        $platformtemp = Platforms::where("name", $platform)->first("name");
        if ($platformtemp == null) {
            $newPlatform = Platforms::create([
                "name" => $platform,
            ]);
        }

        $monetarytemp = Monetarys::where("name", $monetary)->first("name");
        if ($monetarytemp == null) {
            $newMonetary = Monetarys::create([
                "name" => $monetary,
            ]);
        }

        if ($newProject && $newMonetary) {
            return response()->json(["status" => 200]);
        }
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        $projects = Projects::find($id);
        return response()->json(['status' => 200]);
    }

    public function update(Request $request, $id)
    {
        $partner = $request->partner;
        $partnerlength = count($request->partner);
        $partners = $partner[0]['value'];
        for ($i = 1; $i < $partnerlength; $i++) {
            $partners = $partners . ',' . $partner[$i]['value'];
        }

        $platform = $request->platform[0]['label'];

        $projects = Projects::find($id);
        $projects->name = $request->name;
        $projects->budget = $request->budget;
        $projects->deadline = $request->deadline;
        $projects->client_name = $request->client_name;
        $projects->platform = $platform;
        $projects->partner = $partners;
        $projects->type = $request->type;
        $projects->description = $request->description;

        if (!Platforms::find($request->platform, "name")) {
            $newPlatform = Platforms::create([
                "name" => $request->platform,
            ]);
        }
        if ($projects->save()) {
            return response()->json(["status" => 200]);
        }
    }

    public function destroy(Request $request)
    {
        $id = $request->id;
        $projects = Projects::find($id);
        if ($projects->delete()) {
            return response()->json(["status" => 200]);
        }
    }
}
