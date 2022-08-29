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
            'icon_path' => 'https://res.cloudinary.com/dxn30zcfs/image/upload/v1661669977/%E3%83%8F%E3%82%9A%E3%83%B3%E3%82%BF%E3%82%99_nob9bf.jpg',
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
            'icon_path' => 'https://res.cloudinary.com/dxn30zcfs/image/upload/v1661689867/%E9%BE%8D%E3%81%AE%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88-1_dk6u9w.jpg',
            'email' => 'ryu@ryu',
            'email_verified_at' => now(),
            'password' => bcrypt('ryuryuryu'), // password
            'remember_token' => Str::random(10),
        ]);

        DB::table('users')->insert([
            'name' => 'しゅか',
            'age' => '21',
            'university' => '慶應大学',
            'one_word' => 'よろしくお願いします。',
            'icon_path' => 'https://res.cloudinary.com/dxn30zcfs/image/upload/v1661794835/publicdomainq-0055242amj_acor4i.jpg',
            'email' => 'rshu@ryu',
            'email_verified_at' => now(),
            'password' => bcrypt('ryuryuryu'), // password
            'remember_token' => Str::random(10),
        ]);

        DB::table('users')->insert([
            'name' => 'blue',
            'age' => '21',
            'university' => '慶應大学',
            'one_word' => 'よろしくお願いします。',
            'icon_path' => 'https://res.cloudinary.com/dxn30zcfs/image/upload/v1661794913/Blue_Hawaii_vuf7mc.jpg',
            'email' => 'ryulkll@ryu',
            'email_verified_at' => now(),
            'password' => bcrypt('ryuryuryu'), // password
            'remember_token' => Str::random(10),
        ]);

        DB::table('users')->insert([
            'name' => 'らら',
            'age' => '21',
            'university' => '慶應大学',
            'one_word' => 'よろしくお願いします。',
            'icon_path' => 'https://res.cloudinary.com/dxn30zcfs/image/upload/v1661795000/publicdomainq-0045460djw_wcgt18.jpg',
            'email' => 'ryulkll@ryulsf',
            'email_verified_at' => now(),
            'password' => bcrypt('ryuryuryu'), // password
            'remember_token' => Str::random(10),
        ]);
    }
}
