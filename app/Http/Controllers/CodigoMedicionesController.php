<?php

namespace App\Http\Controllers;

use App\Models\CodigoMedicion;
use Illuminate\Http\Request;

class CodigoMedicionesController extends Controller
{
    //
    public function getAll(){
        return CodigoMedicion::select('id as Código','descripcion as Descripción', 'unidad as Unidad')->get();
    }
}
