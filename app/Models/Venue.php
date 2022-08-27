<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venue extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'description',
        'owner_id',
        'lat',
        'lng',
    ];

    public function owner()
    {
        return $this->belongsTo('App\Models\Owner');
    }

    public function venue_images()
    {
        return $this->hasMany('App\Models\VenueImage');
    }

    public function applyMessages()
    {
        return $this->hasMany('App\Models\ApplyMessage');
    }

    public function combinations()
    {
        return $this->hasMany('App\Models\Combination');
    }
}
