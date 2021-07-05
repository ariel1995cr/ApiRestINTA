<?php

namespace Database\Seeders;

use App\Models\Estacion;
use Illuminate\Database\Seeder;

class EstacionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $Estacion = new Estacion();
        $Estacion->denominacion = 'Gastre - Salina El Molle';
        $Estacion->idExterna = '56';
        $Estacion->latitud = '-42.2358333';
        $Estacion->longitud = '-69.60799999999999';
        $Estacion->identificacion = 'IPA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Estancia Tecka';
        $Estacion->latitud = '-43.7808139';
        $Estacion->longitud = '-71.1795';
        $Estacion->idExterna = '57';
        $Estacion->identificacion = 'IPA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Lago Fontana';
        $Estacion->idExterna = '58';
        $Estacion->latitud = '-44.9816861';
        $Estacion->longitud = '-71.3911222';
        $Estacion->identificacion = 'IPA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Sierra Cuadrada';
        $Estacion->idExterna = '70';
        $Estacion->latitud = '-44.6207278';
        $Estacion->longitud = '-68.0587';
        $Estacion->identificacion = 'IPA';
        $Estacion->save();
    }
}
