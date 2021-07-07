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

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');

Route::get('/consumirServicioINTA', function () {

    $dataBody = [
        'nombreDeUsuario'=>'RHN',
        'clave'=>'1R2H',
    ];
    $client = new Client([
        // Base URI is used with relative requests
        'base_uri' => 'http://utr.gsm.ina.gob.ar:5667/SAT2Rest/api/',
        // You can set any number of default request options.
        'timeout'  => 40.0,
    ]);

    $response = $client->post('AutenticarUsuario',['body'=>json_encode($dataBody),
        'cookies' => new \GuzzleHttp\Cookie\FileCookieJar(storage_path('/cookies/cookies.json'))]);



    $cookieData = json_decode(file_get_contents(storage_path('/cookies/cookies.json')));
    foreach ($cookieData as $cookie) {
        //If there are multiple cookie data, you could filter according to your case
        $cookie = json_decode(json_encode($cookie), TRUE);
        $setCookie = new \GuzzleHttp\Cookie\SetCookie($cookie);
    }

    $jar = new \GuzzleHttp\Cookie\CookieJar();
    $jar->setCookie($setCookie);



    $estaciones = Estacion::where('identificacion', 'INTA')->get();
    foreach ($estaciones as $estacion) {
        $data = [
          'idEquipo'=>$estacion->idExterna
        ];
        $response = $client->post('RecuperarInstantaneosDeEquipo',['body'=>json_encode($data),
            'cookies'=>$jar]);
        print_r($response->getStatusCode());
        print_r($response->getBody()->getContents());
        echo "<br>";
    }
});





Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__ . '/auth.php';
