<?php

use App\Http\Controllers\CodigoMedicionesController;
use App\Http\Controllers\EstacionesController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\EstacionesController as EstacionesControllerApi;
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

Route::prefix('v1')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::post('login', [AuthController::class, 'login']);

        Route::get('estaciones', [EstacionesControllerApi::class, 'getAll']);
        Route::get('estacion/{estacion}', [EstacionesControllerApi::class, 'getEstacion']);

        Route::middleware('auth:sanctum')->get("user", [AuthController::class, 'profile']);
        Route::middleware('auth:sanctum')->get("refresh", [AuthController::class, 'refresh']);

        Route::apiResource('user',AuthController::class)->only('store', 'index');
    });
});
