<?php

namespace App\Console\Commands;

use App\Models\Estacion;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TomarMediciones extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mediciones:tomarMediciones';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Tomar Mediciones de estaciones metereologicas';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Log::emergency('Ejecutando mediciones');
        $client = new Client([
            // Base URI is used with relative requests
            'base_uri' => 'http://sipas.inta.gob.ar/',
            // You can set any number of default request options.
            'timeout'  => 10.0,
        ]);


        $estaciones = Estacion::all();


        foreach ($estaciones as $key => $estacion) {
            $data = [
                'Usuario' => 'userwebapi1',
                'idEstacion' => $estacion->idIPA,
                'last' => 1,
                'offset' => 10,
            ];

            $response = $client->post(env('URL_INTA', NULL), [
                'headers' => [
                    'token' => env('TOKEN_APIRESTCLIMA', NULL),
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


        return true;
    }
}
