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
        Schema::create('learning_daily_reports', function (Blueprint $table) {
            $table->id();
            $table->text("name");
            $table->integer("learning_id");
            $table->integer("creator_id");
            $table->text("post");
            $table->integer("progress");
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
        Schema::dropIfExists('learning_daily_reports');
    }
};
