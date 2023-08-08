<?php

namespace App\Http\Controllers;

use App\Models\Platforms;

class PlatformController extends Controller
{
    public function index()
    {
        $platform = Platforms::orderBy('updated_at', 'DESC')->get();
        return response()->json(['status' => 200, 'platform' => $platform]);
    }
}
