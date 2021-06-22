<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CodigoMedicion;
use App\Models\Estacion;
use App\Models\Mediciones;
use Carbon\Carbon;
use Illuminate\Http\Request;

class EstacionesController extends Controller
{
    //
    public function getAll()
    {
        $estaciones = Estacion::select('id as Código', 'denominacion as Denominación', 'latitud as Latitud', 'longitud as Longitud')->get();

        foreach ($estaciones as $estacion) {
            $actualizacion = Mediciones::where('codigoEstacion', $estacion->Código)->get()->last()->updated_at;
            $estacion->ultimaActualizacion = Carbon::parse($actualizacion)->format('d-m-Y H:m');
            $estacion->ultimaMedicion = Mediciones::where('codigoEstacion', $estacion->Código)->where('updated_at', $actualizacion)->get();
        }

        return $estaciones;
    }

    public function getLastMedicion($estacionId)
    {
        $fecha = Mediciones::where('codigoEstacion', $estacionId)->orderBy('created_at', 'desc')->first();

        return Mediciones::select('codigoMedicion as Código de medición', 'created_at as Fecha y hora', 'valorMedicion as Medición')->where('codigoEstacion', $estacionId)->orderBy('created_at')->where('created_at', $fecha->created_at)->get();
    }

    public function getMedicionRangoFecha($estacionId, $codigoMedicion, $desde, $hasta)
    {
        $format = 'd-m-Y';
        $desde = Carbon::createFromFormat($format, $desde);
        $hasta = Carbon::createFromFormat($format, $hasta);

        return Mediciones::select('created_at as Fecha y hora', 'valorMedicion as Medición')
            ->where('codigoEstacion', $estacionId)
            ->where('codigoMedicion', $codigoMedicion)
            ->whereBetween('created_at', [$desde, $hasta])
            ->orderBy('created_at', 'desc')
            ->get();
    }
}
