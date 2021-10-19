<?php

namespace App\Http\Controllers;

use App\Http\Requests\ConsultaRequest;
use App\Models\Consulta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ConsultaController extends Controller
{
    //
    public function realizarConsulta(ConsultaRequest $request){
        $consulta = new Consulta();
        $consulta->consulta = $request->consulta;
        $consulta->direccion = $request->direccion;
        $consulta->user_id = auth('sanctum')->id();
        $consulta->save();
        return response()->json([
            'data' => $consulta,
            'msg' => 'Consulta realizada correctamente.',
        ]);
    }
}
