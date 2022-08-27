<?php

use App\Http\Controllers\ApplyMessageController;
use App\Http\Controllers\groupMessageController;
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

//学生ユーザーのみのルーティング
Route::controller(EventController::class)->middleware('auth')->group(function(){
    //イベントに関するルーティング
    Route::prefix('events')->group(function (){
        Route::get('/create', 'create')->name('events.create');
        Route::post('/store', 'store')->name('events.store');
        Route::post('/operator/{event_id}', 'operator_join')->name('events.operator_join');
        Route::get('/operator/messages', 'operator_messages')->name('events.operator_messages');
    });
});

Route::controller(UserController::class)->group(function(){
    Route::get('/users/edit','edit')->name('users.edit');
    Route::put('/users/edit', 'update')->name('users.update');
});

Route::controller(groupMessageController::class)->middleware('auth')->group(function(){
    Route::get('/events/messages/{event}', 'index')->name('groupMessage.index');
    Route::post('/events/messages/store','store')->name('groupMessage.store');
});

//開催地ユーザーのみのルーティング
Route::controller(VenueController::class)->middleware('auth:owner')->group(function(){
    Route::get('/venues/create', 'create')->name('venues.create');
    Route::post('/venues/store', 'store');
});

//全ユーザーが見れるルーティング
Route::get('/apply/messages', [ApplyMessageController::class, 'index'])->name('apply.index');
Route::post('/apply/messages', [ApplyMessageController::class, 'store'])->name('apply.store');

Route::controller(EventController::class)->prefix('events')->group(function(){
    Route::get('/', 'index')->name('events.index');
    Route::get('/{event}', 'show')->name('events.show');
});

Route::controller(VenueController::class)->prefix('venues')->group(function(){
    Route::get('/', 'index')->name('venues.index');
    Route::get('/apply/{venue}','apply')->name('venues.apply');
    Route::post('/apply/store/{venue}','apply_store')->name('venues.apply_store');
    Route::get('/{venue}', 'show')->name('events.show');
});

Route::controller(UserController::class)->group(function(){
    Route::get('/users/{user}','show')->name('users.show');
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
    return redirect()->route('events.index');
//	return Inertia::render('test', [
//		'greeting' => 'Hello'
//	]);
})->name('test');

Route::get('/about', function() {
	return Inertia::render('about');
})->name('about');

//Route::resource('/user', UserController::class);

require __DIR__.'/auth.php';
Route::prefix('owner')->name('owner.')->group(function(){
    require __DIR__.'/owner.php';
});
