<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstacionMedicionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estacion_medicion', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('codigoEstacion');
            $table->unsignedBigInteger('codigoMedicion');
            $table->string('valorMedicion');
            $table->foreign('codigoEstacion')->references('id')->on('estaciones');
            $table->foreign('codigoMedicion')->references('id')->on('codigomedicion');
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
        Schema::dropIfExists('estacion_medicion');
    }
}
