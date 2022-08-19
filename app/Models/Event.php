<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image_path',
        'status',
        'user_id',
        'venue_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function operators()
    {
        return $this->hasMany('App\Models\Operator');
    }

    public function groupMessages()
    {
        return $this->hasMany('App\Models\GroupMessage');
    }
}
