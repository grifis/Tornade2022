<?php

namespace App\Http\Controllers;

use App\Models\ApplyMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ApplyMessageController extends Controller
{

    public function index(Request $request, ApplyMessage $applyMessage)
    {
        $messages = $applyMessage->with('user', 'event', 'venue')->where('event_id', $request->event_id)->where('venue_id', $request->venue_id)->get();
        return Inertia::render('ApplyMessage/index',[
            'messages' => $messages,
            'eventId' => $request->event_id,
            'venueId' => $request->venue_id,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([   //バリデーション適用後の配列
            'message' => ['required'],
            'event_id' => ['required'],
            'venue_id' => ['required'],
        ]);

        $user = Auth::user();   //ログインしているユーザーを取得
        $validated += ['user_id' => $user->id];   //ユーザーidを配列に加える
        ApplyMessage::create($validated);
    }
}
