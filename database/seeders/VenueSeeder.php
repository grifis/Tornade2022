<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class VenueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('venues')->insert([
            'name' => '山田一郎',
            'address' => '静岡県伊東市3-9-19',
            'lat' => '34.965354837294036',
            'lng' => '139.10408803193022',
            'description' => "静岡の中でも、東京から1時間ほどで来れる利便性の良い地域です。熱海の地域は観光地としても有名ですが、少し離れた伊東地域では過疎化が進み、コロナの影響もあり、観光客が激減しています。若者の力を借りて、地域を盛り上げたいと思っています！\n開催場所は、伊東市の観光支援団体が運営する道の駅に隣接するホールです。規模は100名程度で、大きな駐車場もあります！",
            'owner_id' => 1,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
