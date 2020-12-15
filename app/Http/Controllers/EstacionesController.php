<?php

namespace App\Http\Controllers;

use App\Models\CodigoMedicion;
use App\Models\Estacion;
use App\Models\Mediciones;
use Carbon\Carbon;
use Illuminate\Http\Request;

class EstacionesController extends Controller
{
    //
    public function getAll(){
        return Estacion::select('id as Código','denominacion as Denominación','latitud as Latitud','longitud as Longitud')->get();
    }

    public function getLastMedicion($estacionId){
        $fecha = Mediciones::where('codigoEstacion',$estacionId)->orderBy('created_at','desc')->first();

        return Mediciones::select('codigoMedicion as Código de medición','created_at as Fecha y hora','valorMedicion as Medición')->where('codigoEstacion',$estacionId)->orderBy('created_at')->where('created_at',$fecha->created_at)->get();
    }

    public function getMedicionRangoFecha($estacionId, $codigoMedicion, $desde, $hasta){
        $format = 'd-m-Y';
        $desde = Carbon::createFromFormat($format, $desde);
        $hasta = Carbon::createFromFormat($format, $hasta);

        return Mediciones::select('created_at as Fecha y hora','valorMedicion as Medición')
                ->where('codigoEstacion',$estacionId)
                ->where('codigoMedicion',$codigoMedicion)
                ->whereBetween('created_at', [$desde, $hasta])
                ->orderBy('created_at','desc')
                ->get();

    }
}
