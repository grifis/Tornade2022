<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Operator;
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

    public function show(Event $event, Operator $operator)
    {
        $event = Event::with(['user', 'operators'])->find($event->id);
        $operators_id = [$event->user_id];
        foreach($event->operators as $operator){
            array_push($operators_id, $operator->id);
        }
        return Inertia::render('Event/show', [
            'event' => $event,
            'operatorsId' => $operators_id
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

    public function operator_join($event_id, Operator $operator)
    {
        $operator->event_id = $event_id;
        $operator->user_id = Auth::user()->id;
        $operator->save();
        return redirect()->route('events.index');
    }

    public function operator_messages()
    {
        return Inertia::render('');
    }
}
