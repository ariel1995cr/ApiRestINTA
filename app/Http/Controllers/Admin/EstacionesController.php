<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CodigoMedicion;
use App\Models\Estacion;
use App\Models\Mediciones;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EstacionesController extends Controller
{
    //
    public function getAll($estacion=null)
    {
        $estaciones = Estacion::select('id as Código', 'denominacion as Denominación', 'latitud as Latitud', 'longitud as Longitud');

        if($estacion){
            $filter = json_decode($estacion);
            $estaciones->orderBy($filter->campo, $filter->direction);
        }

        return $estaciones->get();
    }

    public function getEstacion(Estacion $estacion){
        $ultimaFecha = Mediciones::select('updated_at')->where('codigoEstacion',$estacion->id)->orderBy('updated_at','desc')->first();
        $estacion->ultimaMedicion = Mediciones::select('estacion_medicion.updated_at', 'codigomedicion.descripcion', 'codigomedicion.unidad', 'estacion_medicion.valorMedicion')->join('codigomedicion','estacion_medicion.codigoMedicion','=','codigomedicion.id')->where('codigoEstacion', $estacion->id)->where('estacion_medicion.updated_at', $ultimaFecha->updated_at)->orderBy('codigomedicion.descripcion')->get();
        return response()->json($estacion);
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

    public function getHistoricoMedicion(Estacion $estacion, Request $request){
        if ($request->has('props')) {
            $props = json_decode($request->props);
            $page = $props->pagination->page ?? 1;
            $sortBy = $props->pagination->sortBy ?? null;
            $descending =  isset($props->pagination->descending) ? 'desc' : 'asc';
            $perPage =  isset($props->pagination->rowsPerPage) ?? 10;
        }


        $historicoEstado = DB::table('estacion_medicion as em')
            ->select('em.updated_at')
            ->where('codigoEstacion', $estacion->id)
            ->groupBy('em.updated_at');
        $historicoEstado->orderByDesc('em.updated_at');

        $historicoEstado = $historicoEstado->paginate();

        $historicoEstado->getCollection()->map(function($item) use ($estacion){
           $item->mediciones = DB::table('estacion_medicion as em')
               ->select('em.id', 'em.codigoEstacion', 'em.valorMedicion', 'cm.descripcion', 'cm.unidad')
               ->where('em.updated_at', $item->updated_at)
               ->where('em.codigoEstacion', $estacion->id)
               ->leftJoin('codigomedicion as cm','cm.id','=','em.codigoMedicion')
               ->get();
        });

        return response()->json($historicoEstado);
    }

    public function updateCoordenadas(Request $request, Estacion $estacion){
        $estacion->latitud = $request->lat;
        $estacion->longitud = $request->lng;
        $estacion->save();
        return response()->json([
            'data' => $estacion,
            'msg' => 'Estacion actualizada correctamente.',
        ]);
    }
}
