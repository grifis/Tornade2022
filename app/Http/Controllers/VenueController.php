<?php

namespace App\Http\Controllers;

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

    public function show(Venue $venue)
    {
        $venue = Venue::with(['owner', 'venue_images'])->find($venue->id);
        return Inertia::render('Venue/show', [
            'venue' => $venue
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
}
