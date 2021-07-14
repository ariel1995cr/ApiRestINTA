<?php

namespace App\Console\Commands;

use App\Models\Estacion;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TomarMedicionesINTA extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mediciones:INTA';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Tomar Mediciones de estaciones metereologicas inta';

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
        Log::emergency('Ejecutando mediciones INTA');

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
            $data = json_decode($response->getBody()->getContents());
            $fechaActualizacion = $data->fechaUltimaActualizacionDatos;
            $fechaActualizacion = Carbon::createFromFormat('d/m/Y H:i:s',$fechaActualizacion);
            $dataSensores = $data->datosSensores;
            foreach ($dataSensores as $item) {
                if($item->nombreSensor == 'Limnimetro_10b'){
                    $codigoMedicion = 8;
                }
                if($item->nombreSensor == '_Rad Solar'){
                    $codigoMedicion = 7;
                }
                if($item->nombreSensor == '_Pres Atmosferica'){
                    $codigoMedicion = 9;
                }
                if($item->nombreSensor == '_Hum Ambiente'){
                    $codigoMedicion = 2;
                }
                if($item->nombreSensor == '_Temp Ambiente'){
                    $codigoMedicion = 1;
                }
                if($item->nombreSensor == '_Pluviometro'){
                    $codigoMedicion = 10;
                }
                if($item->nombreSensor == '_Veleta'){
                    $codigoMedicion = 5;
                }
                if($item->nombreSensor == '_Anemometro'){
                    $codigoMedicion = 4;
                }
                if($item->nombreSensor == '_Bateria'){
                    $codigoMedicion = 11;
                }

                $valorMedicion = $item->valor;

                if($valorMedicion != "[]"){
                    DB::table('estacion_medicion')->insert([
                        'codigoEstacion' => $estacion->id,
                        'codigoMedicion' => $codigoMedicion,
                        'valorMedicion' => $valorMedicion,
                        'created_at' => $fechaActualizacion,
                        'updated_at' => Carbon::now(),
                    ]);
                }
            }
        }
        return true;
    }
}
