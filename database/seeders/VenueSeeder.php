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
            'name' => '過疎化が進む伊東地域でイベントを企画して欲しい！',
            'address' => '静岡県伊東市3-9-19',
            'lat' => '34.965354837294036',
            'lng' => '139.10408803193022',
            'description' => "静岡の中でも、東京から1時間ほどで来れる利便性の良い地域です。熱海の地域は観光地としても有名ですが、少し離れた伊東地域では過疎化が進み、コロナの影響もあり、観光客が激減しています。若者の力を借りて、地域を盛り上げたいと思っています！".PHP_EOL."開催場所は、伊東市の観光支援団体が運営する道の駅に隣接するホールです。規模は100名程度で、大きな駐車場もあります！",
            'requirements' => "道の駅に来たいと思ってもらえるような、伊東の魅力が伝わるイベントをお待ちしています。過去には、フリーマーケットや小規模の花火大会を開催したこともございます。".PHP_EOL."地域の人をはじめ、県内の他の地域や、県外の方も来たくなるようなワクワクするイベントをお待ちしております！",
            'phone_number' => "034-224-9982",
            'owner_id' => 1,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);

        DB::table('venues')->insert([
            'name' => '一緒に福島県葛尾村を盛り上げてくれませんか？',
            'address' => '静岡県伊東市3-9-19',
            'lat' => '34.965354837294036',
            'lng' => '139.10408803193022',
            'description' => "福島の中でも、山と森に囲まれた、自然豊かな土地です！毎年大学生にもインターンとしてきてもらっています！",
            'requirements' => "素晴らしいイベントお待ちしております。",
            'phone_number' => "034-224-9982",
            'owner_id' => 2,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
