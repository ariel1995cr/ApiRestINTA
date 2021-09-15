<?php

namespace App\Http\Controllers;

use App\Models\CodigoMedicion;
use App\Models\Mediciones;
use Illuminate\Http\Request;

class CodigoMedicionesController extends Controller
{
    //
    public function getAll(){
        return CodigoMedicion::select('id as Código','descripcion as Descripción', 'unidad as Unidad')->get();
    }

    public function getMedicionesPosibles($estacionId){
        $mediciones = Mediciones::select('codigoMedicion')->where('codigoEstacion', $estacionId)->groupby('codigoMedicion')->get();

        $medicionesPosibles = CodigoMedicion::select('id as value', 'descripcion as label', 'unidad')->whereIn('id', $mediciones)->get();

        return $medicionesPosibles;
    }
}
