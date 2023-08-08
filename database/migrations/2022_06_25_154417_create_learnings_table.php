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
        Schema::create('learnings', function (Blueprint $table) {
            $table->id();
            $table->set("subject_title", ["foreign", "basic", "hightech"]);
            $table->string("title");
            $table->string("course");
            $table->date("deadline");
            $table->string("description");
            $table->integer("creator_id");
            $table->set('accept', ['accepted', 'unaccepted'])->default('unaccepted');
            $table->set('state', ['waiting', 'inprogress', 'closed', 'finished'])->default("waiting");
            $table->integer('progress')->default('0');
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
        Schema::dropIfExists('learnings');
    }
};
