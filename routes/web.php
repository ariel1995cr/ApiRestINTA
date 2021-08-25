<?php

use App\Models\CodigoMedicion;
use App\Models\Estacion;
use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/fotosGoogle', function () {
    $estaciones = Estacion::where('identificacion', 'IPA')->get();
    foreach ($estaciones as $estacion) {
        $url = 'https://maps.googleapis.com/maps/api/staticmap?center=-'.abs($estacion->latitud).',-'.abs($estacion->longitud).'&zoom=8&size=900x400&key=&markers=color:red%7Clabel:E%7C'.'-'.abs($estacion->latitud).',-'.abs($estacion->longitud);
        $img = public_path('storage/estaciones') . '/'.$estacion->id.'.png';
        file_put_contents($img, file_get_contents($url));
    }
});



Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');






Route::get('/consumirServicio', function () {
    $client = new Client([
        // Base URI is used with relative requests
        'base_uri' => 'http://sipas.inta.gob.ar/',
        // You can set any number of default request options.
        'timeout'  => 10.0,
    ]);


    $estacionesLista = Estacion::all()->pluck('idIPA');
    foreach ($estacionesLista as $estacionArray) {
        # code...

        $data = [
            'Usuario' => 'userwebapi1',
            'idEstacion' => $estacionArray,
            'last' => 1000,
            'offset' => 10,
        ];


        $response = $client->post('http://sipas.inta.gob.ar/codesipas/web/app_dev.php/getDataEstacion', [
            'headers' => [
                'token' => '08f97bceec374889fd52171f952b673a7b370ab96099254c3892da97c2682ff8',
                'Content-Type' => 'application/json'
            ],
            'body'    => json_encode($data),
        ]);

        $body = $response->getBody();

        $dataEstacion = json_decode($body, true);

        $estacion = Estacion::where('denominacion', $dataEstacion['Nombre'])->first();

        foreach ($dataEstacion['list'] as $key => $medicion) {
            DB::table('estacion_medicion')->insert([
                'codigoEstacion' => $estacion->id,
                'codigoMedicion' => 1,
                'valorMedicion' => $medicion['temp'],
                'created_at' => $medicion['fecha']['date'],
                'updated_at' => Carbon::now(),
            ]);

            DB::table('estacion_medicion')->insert([
                'codigoEstacion' => $estacion->id,
                'codigoMedicion' => 2,
                'valorMedicion' => $medicion['hum'],
                'created_at' => $medicion['fecha']['date'],
                'updated_at' => Carbon::now(),
            ]);

            DB::table('estacion_medicion')->insert([
                'codigoEstacion' => $estacion->id,
                'codigoMedicion' => 3,
                'valorMedicion' => $medicion['Lluvia'],
                'created_at' => $medicion['fecha']['date'],
                'updated_at' => Carbon::now(),
            ]);

            DB::table('estacion_medicion')->insert([
                'codigoEstacion' => $estacion->id,
                'codigoMedicion' => 4,
                'valorMedicion' => $medicion['vVel'],
                'created_at' => $medicion['fecha']['date'],
                'updated_at' => Carbon::now(),
            ]);

            DB::table('estacion_medicion')->insert([
                'codigoEstacion' => $estacion->id,
                'codigoMedicion' => 5,
                'valorMedicion' => $medicion['vDir'],
                'created_at' => $medicion['fecha']['date'],
                'updated_at' => Carbon::now(),
            ]);

            DB::table('estacion_medicion')->insert([
                'codigoEstacion' => $estacion->id,
                'codigoMedicion' => 6,
                'valorMedicion' => $medicion['pBarom'],
                'created_at' => $medicion['fecha']['date'],
                'updated_at' => Carbon::now(),
            ]);

            DB::table('estacion_medicion')->insert([
                'codigoEstacion' => $estacion->id,
                'codigoMedicion' => 7,
                'valorMedicion' => $medicion['RadSolar'],
                'created_at' => $medicion['fecha']['date'],
                'updated_at' => Carbon::now(),
            ]);
        }
    }
});





Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__ . '/auth.php';
