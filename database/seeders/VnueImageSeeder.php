<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class VnueImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('venue_images')->insert([
            'venue_id' => 1,
            'image_path' => 'https://res.cloudinary.com/dxn30zcfs/image/upload/v1661701477/4205907_s_ze1g0j.jpg',
        ]);

        DB::table('venue_images')->insert([
            'venue_id' => 1,
            'image_path' => 'https://res.cloudinary.com/dxn30zcfs/image/upload/v1661702482/main_zfp1ah.jpg',
        ]);
    }
}
