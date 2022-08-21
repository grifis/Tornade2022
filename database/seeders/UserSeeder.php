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
            'name' => '山田一郎',
            'age' => '19',
            'university' => '早稲田大学',
            'one_word' => 'よろしくお願いします。',
            'icon_path' => null,
            'email' => 'yamada@yamada',
            'email_verified_at' => now(),
            'password' => bcrypt('yamayama'), // password
            'remember_token' => Str::random(10),
        ]);
    }
}
