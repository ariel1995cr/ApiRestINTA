<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PDFExportRequest;
use App\Models\Mediciones;
use Carbon\Carbon;
use Illuminate\Http\Request;
use PDF;

class PDFController extends Controller
{
    //
    public function generarPdf(PDFExportRequest $request){
        $id = $request->id;
        $fechaInicio = $request->fechaInicio;
        $fechaFin = $request->fechaFin;
        $mediciones = collect($request->mediciones)->pluck('label');

        $fechaInicio = Carbon::createFromFormat('d/m/Y', $fechaInicio)->format('Y-m-d');
        $fechaFin = Carbon::createFromFormat('d/m/Y', $fechaFin)->format('Y-m-d');

        $response = [];

        foreach ($request->mediciones as $medicion) {
            $response[$medicion['label']] = Mediciones::select('estacion_medicion.valorMedicion', 'unidad', 'estacion_medicion.updated_at')->whereBetween('estacion_medicion.updated_at', [$fechaInicio, $fechaFin])->where('estacion_medicion.codigoEstacion', $id)
                ->where('codigoMedicion', $medicion['value'])
                ->join('codigomedicion as cm','cm.id','=','estacion_medicion.codigoMedicion')
                ->orderBy('estacion_medicion.updated_at')
                ->get();
        }

        $data = [
          'filtros'=>[
              'Fecha Inicio' => $request->fechaInicio,
              'Fecha Fin' => $request->fechaFin,
              'Mediciones seleccionadas' => $mediciones,
          ],
            'data'=>$response,
        ];

        $pdf = PDF::loadView('Pdf.estacion', $data)->setPaper('a4', 'landscape');
        return $pdf->stream('document.pdf');
    }
}
