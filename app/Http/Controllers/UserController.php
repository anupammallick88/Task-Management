<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;
use App\Models\User;
use Illuminate\Support\Str;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderBy('id')->get();
        return response()->json(['status' => 200, 'users' => $users]);
    }

    public function getPartner($id)
    {
        $partner = User::whereNot('id', $id)->get();
        return response()->json(['status' => 200, 'partner' => $partner]);
    }

    public function getProfile($id)
    {
        $profile = User::where('id', $id)->get();
        return response()->json(['status' => 200, 'profile' => $profile]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->avatar = $request->avatar;

        try {
            $user->fill($request->post())->update();

            if ($request->hasFile('avatar')) {
                if ($user->avatar) {
                    $exists = Storage::disk('public')->exists("user/avatar/{$user->avatar}");
                    if ($exists) {
                        Storage::disk('public')->exists("user/avatar/{$user->avatar}");
                    }
                }

                $avatarName = Str::random() . '.' . $request->avatar->getClientOriginalExtension();
                Storage::disk('public')->put('user/avatar', $request->avatar, $avatarName);
                $user->avatar = $avatarName;
                $user->save();
            }

            return response()->json([
                'message' => 'Profile Updated Successfully!'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Something went to wrong while updating your profile'
            ], 500);
        }


        if ($user->save()) {
            return response()->json(["status" => 200]);
        }
    }

    public function destroy($id)
    {
        //
    }
}
