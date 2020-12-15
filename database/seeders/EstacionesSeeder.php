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
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Estancia Tecka';
        $Estacion->idIPA = '57';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Lago Fontana';
        $Estacion->idIPA = '58';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Sierra Cuadrada';
        $Estacion->idIPA = '70';
        $Estacion->save();

        

    }
}
