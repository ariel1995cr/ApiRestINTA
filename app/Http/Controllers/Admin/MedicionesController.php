<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Mediciones;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class MedicionesController extends Controller
{
    //
    public function getHistoricoEstacion($estacion = null){
        $mediciones = Mediciones::select('codigoMedicion', 'codigomedicion.descripcion')->where('codigoEstacion',$estacion)->groupBy('codigoMedicion', 'codigomedicion.descripcion')
            ->join('codigomedicion', 'codigomedicion.id', '=', 'estacion_medicion.codigoMedicion')->get();

        $data['columns'] = [];
        $insertodates = false;

        foreach ($mediciones as $medicion){
            $medicion->data = Mediciones::select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))->where('codigoEstacion', $estacion)
                ->where('codigoMedicion', $medicion->codigoMedicion)
                ->groupBy('valorMedicion', 'date')->get();

            foreach ($medicion->data as $item) {
                $item->valorMedicion = str_replace(',','.', $item['valorMedicion']);
            }

            if(!$insertodates){
                $dates = Arr::pluck($medicion->data, 'date');
                $dates = Arr::prepend($dates, 'x');
                $insertodates = true;
                array_push($data['columns'], $dates);
            }

            $medicion2 = Arr::pluck($medicion->data, 'valorMedicion');
            $medicion2 = Arr::prepend($medicion2, $medicion['descripcion']);

            array_push($data['columns'], $medicion2);

        }


        $mediaTemperatura = Mediciones::select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))
            ->estacion($estacion)->temperatura()->groupBy('valorMedicion', 'date')->get();
        foreach ($mediaTemperatura as $item) {
            $item->valorMedicion = str_replace(',','.', $item['valorMedicion']);
        }
        $mediaTemperatura = $mediaTemperatura->avg('valorMedicion');

        $mediaHumedad= Mediciones::select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))
            ->estacion($estacion)->humedad()->groupBy('valorMedicion', 'date')->get()->avg('valorMedicion');

        $mediaViento= Mediciones::select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))
            ->estacion($estacion)->viento()->groupBy('valorMedicion', 'date')->get()->avg('valorMedicion');

        $mediaPrecipitacion= Mediciones::select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))
            ->estacion($estacion)->precipitacion()->groupBy('valorMedicion', 'date')->get()->avg('valorMedicion');

        $mediaPresionBarometrica= Mediciones::select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))
            ->estacion($estacion)->presionBarometrica()->groupBy('valorMedicion', 'date')->get()->avg('valorMedicion');

        $precipitacion = Mediciones::select('valorMedicion', DB::raw("DATE_FORMAT(updated_at, '%Y-%m-%d') as date"))
            ->estacion($estacion)->precipitacion()->groupBy('valorMedicion', 'date')->get();


        $arrayPrecepitiacion['columns'] = [];
        if($precipitacion->count() != 0){
            $arrayPrecepitiacion['columns'] = [];
            $fechas = Arr::pluck($precipitacion, 'date');
            $fechas = Arr::prepend($fechas, 'x');
            array_push($arrayPrecepitiacion['columns'], $fechas);
            $valoresPrecipitacion = Arr::pluck($precipitacion, 'valorMedicion');
            $valoresPrecipitacion = Arr::prepend($valoresPrecipitacion, 'Precipitaciones');
            array_push($arrayPrecepitiacion['columns'], $valoresPrecipitacion);
            $arrayPrecepitiacion['columns'][2] = $arrayPrecepitiacion['columns'][1];
            $arrayPrecepitiacion['columns'][2][0] = 'Precipitaciones Acumulado';
            $acum = 0;
            foreach ($arrayPrecepitiacion['columns'][2] as $index => $item) {
                if($index != 0){
                    $num = floatval($item);
                    $acum += $num;
                    $arrayPrecepitiacion['columns'][2][$index] = $acum;
                }
            }
        }


        return response()->json([
            'medicion' => $data,
            'precipitacion'=> $arrayPrecepitiacion,
            'mediaTemperatura' => $mediaTemperatura ? number_format(floatval($mediaTemperatura), 2).'ºC' : '-',
            'mediaHumedad' => $mediaHumedad ? number_format(floatval($mediaHumedad), 2).'%' : '-',
            'mediaViento' => $mediaViento ? number_format(floatval($mediaViento), 2).'Km/h' : '-',
            'mediaPresionBarometrica' => $mediaPresionBarometrica ? number_format(floatval($mediaPresionBarometrica), 2).'Bar' : '-',
            'mediaPrecipitacion' => $mediaPrecipitacion ? number_format(floatval($mediaPrecipitacion), 2).'mm' : '-',
        ]);
    }
}
