<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\LearningController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PlatformController;
use App\Http\Controllers\DailyReportController;
use App\Http\Controllers\MonetaryController;
use App\Http\Controllers\AdminController;
use App\Models\ProjectDailyReports;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// User Route

// Project Conteoller Routes
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/addProject', function (Request $request) {
    return $request->project();
});
Route::resource('/addProject', ProjectController::class);

Route::get('/getProject/{userid}', [projectController::class, 'getProject']);

Route::get('/deleteProject/{id}', [ProjectController::class, 'destroy']);

Route::get('editProject/{id}', [projectController::class, 'edit']);

Route::put('updateProject/{id}', [projectController::class, 'update']);


// Learning Controller Routes
Route::post('/addLearning', function(Request $request) {
    return $request->learning();
});

Route::resource('/addLearning', LearningController::class);

Route::get('/getLearning/{userid}', [LearningController::class, 'getLearning']);

Route::get('/deleteLearning/{id}', [LearningController::class, 'destroy']);

Route::get('editLearning/{id}', [LearningController::class, 'edit']);

Route::put('updateLearning/{id}', [LearningController::class, 'update']);


// Partner && Platform && Payment Controller Routes
Route::get('/getPartner/{userid}',[UserController::class, 'getPartner']);

Route::get('/getUserProfile/{userid}', [UserController::class, 'getProfile']);

Route::put('/updateUserProfile/{userid}', [UserController::class, 'update']);

Route::get('/getPlatform', [PlatformController::class, 'index']);

Route::get('/getProjectpartners/{partnerid}', [UserController::class, 'getProjectpartners']);

Route::get('/getMonetary', [MonetaryController::class, 'index']);


// Daily Report Controller Routes
Route::get('/getProjectNow/{userid}', [ProjectController::class, 'getProjectNow']);

Route::post('/postProjectDailyReport/{projectid}', [DailyReportController::class, 'addProjectDailyReport']);

Route::get('/getLearningNow/{userid}', [LearningController::class, 'getLearningNow']);

Route::post('/postLearningDailyReport/{learningid}', [DailyReportController::class, 'addLearningDailyReport']);



// Administrator Route

Route::get('/getUsers', [UserController::class, 'index']);

Route::get('/getUserProjects/{userId}', [ProjectController::class, 'getUserFullProjects']);

Route::get('/getUserLearnings/{userId}', [LearningController::class, 'getUserFullLearnings']);

Route::get('/getUserProjectDailyReports/{userId}', [DailyReportController::class, 'getUserFullProjectDailyReports']);

Route::get('/getProjectIdByUserId/{userId}', [ProjectController::class, 'getProjectIdByUserId']);

Route::get('/getProjectDailyReportsByProjectId/{projectId}', [DailyReportController::class, 'getProjectDailyReportsByProjectId']);

Route::get('/getUserLearningDailyReports/{userId}', [DailyReportController::class, 'getUserFullLearningDailyReports']);

Route::get('/getLearningIdByUserId/{userId}', [LearningController::class, 'getLearningIdByUserId']);

Route::get('/getLearningDailyReportsByLearningId/{learningId}', [DailyReportController::class, 'getLearningDailyReportsByLearningId']);

// Route::get('/getUserData/{userId}', [AdminController::class, 'index']);
// 