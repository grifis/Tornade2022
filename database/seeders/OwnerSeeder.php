<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OwnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('owners')->insert([
            'name' => '箱根温泉支援団体',
            'email' => 'hakone@hakone',
            'email_verified_at' => now(),
            'password' => bcrypt('hakohako'), // password
            'remember_token' => Str::random(10),
        ]);
    }
}
