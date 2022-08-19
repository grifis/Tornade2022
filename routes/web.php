<?php

use App\Http\Controllers\VenueController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\EventController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//全ユーザーが見れるルーティング
Route::controller(EventController::class)->prefix('events')->group(function(){
    Route::get('/', 'index')->name('events.index');
});

Route::controller(PostController::class)->prefix('posts')->group(function(){
    Route::get('/', 'index')->name('posts.index');
});

Route::controller(VenueController::class)->prefix('venues')->group(function(){
    Route::get('/', 'index')->name('venues.index');
});

//学生ユーザーのみのルーティング
Route::controller(PostController::class)->prefix('posts')->middleware('auth')->group(function(){
    Route::get('/create', 'create')->name('posts.create');
    Route::post('/store', 'store');
    Route::get('/{post}', 'show');
});

Route::controller(EventController::class)->prefix('events')->middleware('auth')->group(function(){
    Route::get('/create', 'create')->name('events.create');
    Route::post('/store', 'store')->name('events.store');
    Route::get('/{event}', 'show')->name('events.show');
});

//開催地ユーザーのみのルーティング
Route::controller(VenueController::class)->middleware('auth:owner')->group(function(){
    Route::get('/venues/create', 'create')->name('venue.create');
    Route::post('/venues/store', 'store');
});


//以下テスト用
Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', function() {
    return redirect()->route('posts.index');
//	return Inertia::render('test', [
//		'greeting' => 'Hello'
//	]);
})->name('test');

Route::get('/about', function() {
	return Inertia::render('about');
})->name('about');

Route::resource('/user', UserController::class);

require __DIR__.'/auth.php';
Route::prefix('owner')->name('owner.')->group(function(){
    require __DIR__.'/owner.php';
});
