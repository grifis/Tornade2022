<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index()
    {
        return Inertia::render('Post/index', [
            'posts' => Post::with('user')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Post/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([   //バリデーション適用後の配列
            'title' => ['required', 'max:50'],
            'body' => ['required'],
        ]);

        $user = Auth::user();   //ログインしているユーザーを取得
        $validated += ['user_id' => $user->id];   //ユーザーidを配列に加える

        Post::create($validated);
        return redirect()->route('posts.index');
    }
}
