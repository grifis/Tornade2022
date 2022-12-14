<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Combination extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'venue_id',
        'event_id',
        'message',
    ];

    public function venue()
    {
        return $this->belongsTo('App\Models\Venue');
    }

    public function event()
    {
        return $this->belongsTo('App\Models\Event');
    }
}
