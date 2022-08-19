<?php

namespace App\Http\Controllers;

use App\Models\Venue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VenueController extends Controller
{
    public function index(Venue $venue)
    {
        return Inertia::render('Venue/index', [
            'venues' => $venue->with('owner')->get()
        ]);
    }

    public function show(Post $post)
    {
        return Inertia::render('Post/show', [
            'post' => $post
        ]);
    }

    public function create()
    {
        return Inertia::render('Venue/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([   //バリデーション適用後の配列
            'name' => ['required', 'max:50'],
            'address' => ['required'],
        ]);

        $owner = Auth::guard('owner')->user();   //ログインしているownerユーザーを取得
        $validated += ['owner_id' => $owner->id];   //owner_idを配列に加える

        Venue::create($validated);
        return redirect()->route('posts.index');
    }
}
