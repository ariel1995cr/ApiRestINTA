<?php

namespace Database\Seeders;

use App\Models\Estacion;
use Illuminate\Database\Seeder;

class EstacionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $Estacion = new Estacion();
        $Estacion->denominacion = 'Gastre - Salina El Molle';
        $Estacion->idExterna = '56';
        $Estacion->latitud = '-42.2358333';
        $Estacion->longitud = '-69.60799999999999';
        $Estacion->identificacion = 'IPA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Estancia Tecka';
        $Estacion->latitud = '-43.7808139';
        $Estacion->longitud = '-71.1795';
        $Estacion->idExterna = '57';
        $Estacion->identificacion = 'IPA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Lago Fontana';
        $Estacion->idExterna = '58';
        $Estacion->latitud = '-44.9816861';
        $Estacion->longitud = '-71.3911222';
        $Estacion->identificacion = 'IPA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Sierra Cuadrada';
        $Estacion->idExterna = '70';
        $Estacion->latitud = '-44.6207278';
        $Estacion->longitud = '-68.0587';
        $Estacion->identificacion = 'IPA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Quequentreu - Escuela';
        $Estacion->idExterna = '39';
        $Estacion->latitud = '-41.89861111111111';
        $Estacion->longitud = '-71.5025';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Azul - El Azul';
        $Estacion->idExterna = '90';
        $Estacion->latitud = '-41.942499999999995';
        $Estacion->longitud = '-71.5025';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'NIV - Cerro Piltriquitron';
        $Estacion->idExterna = '494';
        $Estacion->latitud = '-49.797928152675';
        $Estacion->longitud = '-69.328116319444';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Ternero - Cuesta del Ternero';
        $Estacion->idExterna = '369';
        $Estacion->latitud = '-41.95055555555556';
        $Estacion->longitud = '-71.46972222222223';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Azul - Puesto 1';
        $Estacion->idExterna = '325';
        $Estacion->latitud = '-41.95888888888889';
        $Estacion->longitud = '-71.37527777777777';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Carrenleufú - Carrenleufú';
        $Estacion->idExterna = '40';
        $Estacion->latitud = '-43.528055555555554';
        $Estacion->longitud = '-71.56611111111111';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Carrenleufú - La Elena';
        $Estacion->idExterna = '64';
        $Estacion->latitud = '-43.7';
        $Estacion->longitud = '-71.60027777777778';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Carrileufú - Cholila';
        $Estacion->idExterna = '302';
        $Estacion->latitud = '-42.495555555555555';
        $Estacion->longitud = '-71.30444444444444';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Carrenleufú - Cholila MET';
        $Estacion->idExterna = '210';
        $Estacion->latitud = '-42.51111111111111';
        $Estacion->longitud = '-71.5411111111111';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Chubut - El Maitén';
        $Estacion->idExterna = '240';
        $Estacion->latitud = '-42.099722222222226';
        $Estacion->longitud = '-71.42750000000001';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Chubut - Los Altares';
        $Estacion->idExterna = '57';
        $Estacion->latitud = '-43.88861111111111';
        $Estacion->longitud = '-71.17';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Epuyén - La Angostura';
        $Estacion->idExterna = '326';
        $Estacion->latitud = '-42.18888888888888';
        $Estacion->longitud = '-68.39833333333334';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Aº Esquel - Ea El Principio';
        $Estacion->idExterna = '248';
        $Estacion->latitud = '-42.958333333333336';
        $Estacion->longitud = '-71.4';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Gualjaina - Gualjaina';
        $Estacion->idExterna = '298';
        $Estacion->latitud = '-42.65138888888889';
        $Estacion->longitud = '-71.38444444444445';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Mayo - Paso Mayo';
        $Estacion->idExterna = '63';
        $Estacion->latitud = '-45.683611111111105';
        $Estacion->longitud = '-70.43555555555555';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Percey - Ruta a Futalaufquen';
        $Estacion->idExterna = '36';
        $Estacion->latitud = '-43.02111111111111';
        $Estacion->longitud = '-70.25222222222222';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Senguerr - Nacimiento';
        $Estacion->idExterna = '259';
        $Estacion->latitud = '-44.958333333333336';
        $Estacion->longitud = '-71.45555555555556';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Futaleufú - Puesto Ríos';
        $Estacion->idExterna = '16';
        $Estacion->latitud = '-43.17472222222222';
        $Estacion->longitud = '-71.34194444444444';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Arrayanes - Lago Verde';
        $Estacion->idExterna = '509';
        $Estacion->latitud = '-42.743611111111115';
        $Estacion->longitud = '-71.6236111111111';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Lago Epuyen - Muelle';
        $Estacion->idExterna = '234';
        $Estacion->latitud = '-42.208333333333336';
        $Estacion->longitud = '-71.74305555555556';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Hielo - Confluencia';
        $Estacion->idExterna = '289';
        $Estacion->latitud = '-43.516666666666666';
        $Estacion->longitud = '-71.42277777777778';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Senguer - Pte Camino Buen Past';
        $Estacion->idExterna = '192';
        $Estacion->latitud = '-45.56444444444444';
        $Estacion->longitud = '-71.60916666666667';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Chubut-Alto Chubut(Nacimiento)';
        $Estacion->idExterna = '403';
        $Estacion->latitud = '-41.83416666666667';
        $Estacion->longitud = '-69.06722222222221';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Senguer - Sarmiento Aero';
        $Estacion->idExterna = '74';
        $Estacion->latitud = '-45.58111111111111';
        $Estacion->longitud = '-71.10833333333333';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'La Paulina - Aserradero';
        $Estacion->idExterna = '65';
        $Estacion->latitud = '-45.001666666666665';
        $Estacion->longitud = '-69.075';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Lago Muster - Fortín';
        $Estacion->idExterna = '493';
        $Estacion->latitud = '-45.58027777777778';
        $Estacion->longitud = '-71.16805555555555';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Chubut - Ameghino';
        $Estacion->idExterna = '87';
        $Estacion->latitud = '-43.69833333333333';
        $Estacion->longitud = '-69.27638888888889';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Carrenleufú - Puente de Hierro';
        $Estacion->idExterna = '360';
        $Estacion->latitud = '-43.54361111111111';
        $Estacion->longitud = '-64.47500000000001';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Carrenleufú - Poncho Moro';
        $Estacion->idExterna = '85';
        $Estacion->latitud = '-43.67166666666667';
        $Estacion->longitud = '-71.48722222222223';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Chubut - Valle Inferior';
        $Estacion->idExterna = '208';
        $Estacion->latitud = '-43.29083333333333';
        $Estacion->longitud = '-71.40166666666667';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Carrenleufú - Jaramillo';
        $Estacion->idExterna = '392';
        $Estacion->latitud = '-43.84166666666667';
        $Estacion->longitud = '-65.50527777777778';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Senguer - Los Molinos';
        $Estacion->idExterna = '38';
        $Estacion->latitud = '-45.986111111111114';
        $Estacion->longitud = '-71.24944444444445';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();

        $Estacion = new Estacion();
        $Estacion->denominacion = 'Carrenleufú - Frontera';
        $Estacion->idExterna = '374';
        $Estacion->latitud = '-43.56083333333333';
        $Estacion->longitud = '-69.47500000000001';
        $Estacion->identificacion = 'INTA';
        $Estacion->save();
    }
}
