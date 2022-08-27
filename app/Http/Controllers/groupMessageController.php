<?php

namespace App\Http\Controllers;

use App\Events\MessageCreated;
use App\Models\Event;
use App\Models\GroupMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class groupMessageController extends Controller
{
    public function index(Event $event, GroupMessage $groupMessage)
    {
        $messages = $groupMessage->with('user')->where('event_id', $event->id)->get();
        return Inertia::render('GroupMessage/index',['event' => $event, 'messages' => $messages]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([   //バリデーション適用後の配列
            'message' => ['required'],
            'event_id' => ['required'],
        ]);

        $user = Auth::user();   //ログインしているユーザーを取得
        $validated += ['user_id' => $user->id];   //ユーザーidを配列に加える
        $message = GroupMessage::create($validated);
        event(new MessageCreated($message));
    }
}
