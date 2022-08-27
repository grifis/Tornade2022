<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Hiro',
            'age' => '19',
            'university' => '早稲田大学',
            'one_word' => 'よろしくお願いします。',
            'email' => 'hiro@hiro',
            'email_verified_at' => now(),
            'password' => bcrypt('hirohiro'), // password
            'remember_token' => Str::random(10),
        ]);

        DB::table('users')->insert([
            'name' => 'りゅう',
            'age' => '21',
            'university' => '慶應大学',
            'one_word' => 'よろしくお願いします。',
            'email' => 'ryu@ryu',
            'email_verified_at' => now(),
            'password' => bcrypt('ryuryuryu'), // password
            'remember_token' => Str::random(10),
        ]);
    }
}
