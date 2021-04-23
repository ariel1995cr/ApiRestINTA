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
        $Estacion->idIPA = '56';
        $Estacion->latitud = '-42.2358333';
        $Estacion->longitud = '-69.60799999999999';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Estancia Tecka';
        $Estacion->latitud = '-43.7808139';
        $Estacion->longitud = '-71.1795';
        $Estacion->idIPA = '57';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Lago Fontana';
        $Estacion->idIPA = '58';
        $Estacion->latitud = '-44.9816861';
        $Estacion->longitud = '-71.3911222';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Sierra Cuadrada';
        $Estacion->idIPA = '70';
        $Estacion->latitud = '-44.6207278';
        $Estacion->longitud = '-68.0587';
        $Estacion->save();
    }
}
