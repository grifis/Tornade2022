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
            $table->string('title'); //企画名
            $table->string('description'); //企画の詳細
            $table->string('image_path')->nullable(); //画像のパス
            $table->string('status')->default('運営者募集'); //運営者募集、開催地募集、参加者募集の３つ
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
