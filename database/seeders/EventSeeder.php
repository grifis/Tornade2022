<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('events')->insert([
            'title' => '静岡で浴衣コンテストを開催したい！文化祭が開催できなかった大学生と静岡の魅力を広めるイベント作りませんか？',
            'description' => '静岡の伊東地域で有名な浴衣をテーマとし、浴衣コンテストを開催します！当日は参加者の皆さんに、一番いいと思った浴衣に投票をして頂き、「今年の浴衣」を決めて頂きます！'. PHP_EOL .'ぜひお祭り気分、文化祭気分を楽しみに来てください！',
            'operator_requirement' => '大学に入ってから文化祭楽しんでないな、何かイベント運営に関わってみたいけどサークルに入り損ねてしまった人、オフラインでの繋がりを作りたい人などに、ぜひ一緒に運営してもらいたいと思っています！みんなで楽しい浴衣コンテストを作りませんか？',
            'conditions' => '・高校3年生〜大学生、大学院生'. PHP_EOL .'・週に1回のオンラインMTGに参加できる人'. PHP_EOL .'・開催地（静岡）に当日来れる人'. PHP_EOL .'・オフラインイベントを成功させたい！という気持ち',
            'user_id' => 1,
            'image_path' => 'https://res.cloudinary.com/dxn30zcfs/image/upload/v1661690000/victoriano-izquierdo-CS8Get8gGBI-unsplash_1_hhbwc9.jpg',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);

        DB::table('events')->insert([
            'title' => '群馬の地元の人と一緒にバレーボールがしたい！バレーボール経験者が試合できる会場を探しています！',
            'description' => 'バレーボール大会します！',
            'operator_requirement' => '熱い気持ちを持った人に来てもらいたいです！',
            'conditions' => 'バレーボール経験者',
            'image_path' => 'https://res.cloudinary.com/dxn30zcfs/image/upload/v1661690019/nick-wojtas-KgFpXagcIn0-unsplash_c5jsnl.jpg',
            'user_id' => 2,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
