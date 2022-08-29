<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Operator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Cloudinary;

class EventController extends Controller
{
    public function index(Request $request)
    {
        $word = $request->input('word');
        $events = Event::query();
        if($word){
            $events->where('title', 'like', "%$word%")->orWhere('description', 'like', "%$word%");
        }
        $events = $events->with('user', 'operators.user')->latest()->get();
        return Inertia::render('Event/index', [
            'events' => $events
        ]);
    }

    public function show(Event $event, Operator $operator)
    {
        $event = Event::with(['user', 'operators.user'])->find($event->id);
        $operators_id = [$event->user_id];
        foreach($event->operators as $operator){
            array_push($operators_id, $operator->user_id);
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
            'title' => ['required', 'max:30'],
            'description' => ['required'],
            'operator_requirement' => ['required'],
            'conditions' => ['required'],
        ]);

        $user = Auth::user();   //ログインしているユーザーを取得
        $validated += ['user_id' => $user->id];   //ユーザーidを配列に加える
        if($request->file('images')) {  //画像が送信された場合
                $uploadedFileUrl = Cloudinary::upload($request->file('images')->getRealPath())->getSecurePath(); //Cloudinaryに送信
            $validated += ['image_path' => $uploadedFileUrl];
            }

        Event::create($validated);
        return redirect()->route('events.index');
    }

    public function operator_join($event_id, Operator $operator)
    {
        $operator->event_id = $event_id;
        $operator->user_id = Auth::user()->id;
        $operator->save();
        return redirect('/events/messages/' . $event_id);
    }

    public function operator_messages()
    {
        return Inertia::render('');
    }
}
