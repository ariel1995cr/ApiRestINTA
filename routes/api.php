<?php

use App\Http\Controllers\CodigoMedicionesController;
use App\Http\Controllers\EstacionesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});




Route::prefix('v1')->group(function () {
    Route::get('/estaciones', [EstacionesController::class, 'getAll']);
    Route::get('/codigosMediciones', [CodigoMedicionesController::class, 'getAll']);
    Route::get('/estacion/{estacionId}', [EstacionesController::class, 'getLastMedicion']);
    Route::get('/estacion/{estacionId}/{codigoMedicion}/{desde}/{hasta}', [EstacionesController::class, 'getMedicionRangoFecha']);
});