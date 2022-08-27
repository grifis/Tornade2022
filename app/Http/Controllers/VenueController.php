<?php

namespace App\Http\Controllers;

use App\Models\ApplyMessage;
use App\Models\Combination;
use App\Models\Venue;
use App\Models\VenueImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Cloudinary;

class VenueController extends Controller
{
    public function index(Venue $venue)
    {
        return Inertia::render('Venue/index', [
            'venues' => $venue->with('owner')->get()
        ]);
    }

    public function show(Venue $venue, ApplyMessage $applyMessage)
    {
        $is_planner = false;
        $is_applied = false;
        $event_id = null;
        $user = Auth::guard('web')->user();
        if($user) {  //学生ユーザーだった場合
            $is_planner = $user->events()->get()->isNotEmpty();
        }
        if($is_planner) {  //企画者だった場合
            foreach($venue->combinations as $item){  //開催地とマッチしたイベント一覧を取り出す
                if($item->event->user_id === $user->id){  //イベントのuser_idと企画者のidが一致した場合
                    $event_id = $item->event->id;
                    $is_applied = true;
                    continue;
                }
            }
        }
        $venue = Venue::with(['owner', 'venue_images'])->find($venue->id);
        return Inertia::render('Venue/show', [
            'venue' => $venue,
            'isPlanner' => $is_planner,
            'isApplied' => $is_applied,
            'eventId' => $event_id,
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
            'description' => ['required'],
            'lng' => ['required'],
            'lat' => ['required'],
        ]);

        $owner = Auth::guard('owner')->user();   //ログインしているownerユーザーを取得
        $validated += ['owner_id' => $owner->id];   //owner_idを配列に加える
        $venue = Venue::create($validated);

        if($request->file('images')) {  //画像が送信された場合
            foreach($request->file('images') as $image){
                $venue_image = new VenueImage;
                $uploadedFileUrl = Cloudinary::upload($image->getRealPath())->getSecurePath(); //Cloudinaryに送信
                $venue_image->venue_id = $venue->id;
                $venue_image->image_path = $uploadedFileUrl;
                $venue_image->save();
            }
        }
        return redirect()->route('venues.index');
    }

    public function apply(Venue $venue)
    {
        $user_events = Auth::guard('web')->user()->events()->get();
        return Inertia::render('Venue/application', [
            'userEvents' => $user_events,
            'venue' => $venue,
        ]);
    }

    public function apply_store(Venue $venue, Request $request)
    {
        $validated = $request->validate([   //バリデーション適用後の配列
            'event_id' => ['required'],
            'message' => ['required'],
        ]);

        $validated += ['venue_id' => $venue->id];   //venue_idを配列に加える
        $combi = Combination::create($validated);
        return redirect()->route('apply.index', ['event_id' => $combi->event_id, 'venue_id' => $combi->venue_id]);
    }
}
