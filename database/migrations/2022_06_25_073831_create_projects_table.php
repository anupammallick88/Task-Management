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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('budget');
            $table->date('deadline')->nullable();
            $table->string('client_name');
            $table->string('platform');
            $table->string('partner')->nullable();
            $table->string('description')->nullable();
            $table->set('accept', ['accepted', 'unaccepted'])->default('unaccepted');
            $table->integer('progress')->default('0');
            $table->integer('creator_id')->nullable();
            $table->set('type', ['hourly, monthly, fixed'])->default('fixed');
            $table->set('state', ['waiting', 'inprogress', 'closed', 'finished'])->default('waiting');
            $table->date('finish_date')->nullable();
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
        Schema::dropIfExists('projects');
    }
};
