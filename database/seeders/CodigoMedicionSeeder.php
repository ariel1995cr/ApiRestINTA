<?php

namespace Database\Seeders;

use App\Models\CodigoMedicion;
use Illuminate\Database\Seeder;

class CodigoMedicionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $codigoMedicion = new CodigoMedicion();
        $codigoMedicion->descripcion = 'Temperatura';
        $codigoMedicion->unidad = '°C';
        $codigoMedicion->save();

        $codigoMedicion = new CodigoMedicion();
        $codigoMedicion->descripcion = 'Humedad';
        $codigoMedicion->unidad = '%';
        $codigoMedicion->save();

        $codigoMedicion = new CodigoMedicion();
        $codigoMedicion->descripcion = 'Probabilidad de lluvia';
        $codigoMedicion->unidad = '%';
        $codigoMedicion->save();

        $codigoMedicion = new CodigoMedicion();
        $codigoMedicion->descripcion = 'Velocidad del viento';
        $codigoMedicion->unidad = 'Km/h';
        $codigoMedicion->save();

        $codigoMedicion = new CodigoMedicion();
        $codigoMedicion->descripcion = 'Direccion del viento';
        $codigoMedicion->unidad = '°';
        $codigoMedicion->save();

        $codigoMedicion = new CodigoMedicion();
        $codigoMedicion->descripcion = 'Presión barometrica';
        $codigoMedicion->unidad = 'Bar';
        $codigoMedicion->save();

        $codigoMedicion = new CodigoMedicion();
        $codigoMedicion->descripcion = 'Radiacion solar';
        $codigoMedicion->unidad = 'W/m²';
        $codigoMedicion->save();
    }
}
