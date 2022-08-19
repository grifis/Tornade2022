<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;

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

Route::controller(PostController::class)->prefix('posts')->middleware('auth:owner')->middleware('auth')->group(function(){
    Route::get('/create', 'create')->name('posts.create');
    Route::post('/store', 'store');
    Route::get('/{post}', 'show');
});

Route::controller(PostController::class)->prefix('posts')->group(function(){
    Route::get('/', 'index')->name('posts.index');
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
