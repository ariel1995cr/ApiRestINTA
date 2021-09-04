<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Estacion;
use App\Models\Mediciones;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class EstadisticaController extends Controller
{
    //
    public function obtenerEstadistica(Estacion $estacion, $medicion = null){

        $fechas = DB::table('estacion_medicion')->select(DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as fechas"))
            ->where('codigoEstacion', $estacion->id)
            ->groupBy('fechas')
            ->get()->pluck('fechas')->toArray();

        if(!$medicion){
            $codigoMedicion = DB::table('estacion_medicion')
                ->select('codigoMedicion')
                ->where('codigoEstacion', $estacion->id)
                ->groupBy('codigoMedicion')
                ->get()->pluck('codigoMedicion');
        }else{
            $codigoMedicion = [$medicion];
        }


        $data['columns'] = [];


        $fechas = Arr::prepend($fechas, 'x');
        array_push($data['columns'], $fechas);

        foreach ($codigoMedicion as $item) {
            $mediciones = DB::table('estacion_medicion')
                ->select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))
                ->where('codigoEstacion', $estacion->id)
                ->where('codigoMedicion', $item)
                ->groupBy('valorMedicion', 'date')
                ->get()->pluck('valorMedicion')->toArray();


            foreach ($mediciones as $key => $medicion) {
                $mediciones[$key] = str_replace(',','.', $medicion);
            }

            $nombreMedicion = DB::table('codigomedicion')
                ->where('id', $item)
                ->get()->first()->descripcion;

            $mediciones = Arr::prepend($mediciones, $nombreMedicion);
            array_push($data['columns'], $mediciones);
        }

        $mediaTemperatura = Mediciones::select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))
            ->estacion($estacion)->temperatura()->groupBy('valorMedicion', 'date')->get();
        foreach ($mediaTemperatura as $item) {
            $item->valorMedicion = str_replace(',','.', $item['valorMedicion']);
        }
        $mediaTemperatura = $mediaTemperatura->avg('valorMedicion');

        $mediaHumedad= Mediciones::select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))
            ->estacion($estacion->id)->humedad()->groupBy('valorMedicion', 'date')->get()->avg('valorMedicion');

        $mediaViento= Mediciones::select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))
            ->estacion($estacion->id)->viento()->groupBy('valorMedicion', 'date')->get()->avg('valorMedicion');

        $mediaPrecipitacion= Mediciones::select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))
            ->estacion($estacion->id)->precipitacion()->groupBy('valorMedicion', 'date')->get()->avg('valorMedicion');

        $mediaPresionBarometrica= Mediciones::select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))
            ->estacion($estacion->id)->presionBarometrica()->groupBy('valorMedicion', 'date')->get()->avg('valorMedicion');



        return [
            'data' => $data,
            'mediaTemperatura' => $mediaTemperatura ? number_format(floatval($mediaTemperatura), 2).'ºC' : '-',
            'mediaHumedad' => $mediaHumedad ? number_format(floatval($mediaHumedad), 2).'%' : '-',
            'mediaViento' => $mediaViento ? number_format(floatval($mediaViento), 2).'Km/h' : '-',
            'mediaPresionBarometrica' => $mediaPresionBarometrica ? number_format(floatval($mediaPresionBarometrica), 2).'Bar' : '-',
            'mediaPrecipitacion' => $mediaPrecipitacion ? number_format(floatval($mediaPrecipitacion), 2).'mm' : '-',
        ];
    }
}
