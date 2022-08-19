<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        return Inertia::render('Event/index', [
            'events' => Event::with('user')->get()
        ]);
    }

    public function show(Event $event)
    {
        return Inertia::render('Event/show', [
            'event' => $event
        ]);
    }

    public function create()
    {
        return Inertia::render('Event/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([   //バリデーション適用後の配列
            'title' => ['required', 'max:50'],
            'description' => ['required'],
        ]);

        $user = Auth::user();   //ログインしているユーザーを取得
        $validated += ['user_id' => $user->id];   //ユーザーidを配列に加える

        Event::create($validated);
        return redirect()->route('events.index');
    }
}
