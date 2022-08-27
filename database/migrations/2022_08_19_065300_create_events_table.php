<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title'); //タイトル
            $table->string('status')->default('運営者募集'); //運営者募集、開催地募集、参加者募集の３つ
            $table->string('image_path')->nullable(); //画像のパス
            $table->string('description'); //イベントについて

            //以下運営者募集用
            $table->string('operator_requirement')->nullable(); //募集したい人[運営者募集]
            $table->string('conditions')->nullable(); //条件[運営者募集]

            //以下開催地募集用
            $table->string('venue_requirement')->nullable(); //募集したい開催地
            $table->string('scale')->nullable(); //規模
            $table->string('season')->nullable(); //時期
            $table->string('time')->nullable(); //時間

            //以下参加者募集用
            $table->string('comment')->nullable(); //主催者からのコメント
            $table->string('participation_requirements')->nullable(); //参加詳細
            $table->string('date')->nullable(); //日付
            $table->string('headcount')->nullable(); //人数
            $table->string('entry_fee')->nullable(); //参加費
            $table->string('belongings')->nullable(); //持ち物
            $table->string('others')->nullable(); //その他

            //リレーション
            $table->integer('user_id')->unsigned();
            $table->integer('venue_id')->unsigned()->nullable(); //開催地が見つかったら入力される
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
};
