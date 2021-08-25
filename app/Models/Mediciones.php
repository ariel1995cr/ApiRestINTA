<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mediciones extends Model
{
    use HasFactory;

    protected $table = 'estacion_medicion';

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'updated_at'=>'datetime:d-m-Y h:i',
        'created_at'=>'datetime:d-m-Y h:i',
    ];

    public function scopeEstacion($query, $estacion){
        return $query->where('codigoEstacion', $estacion);
    }

    public function scopeTemperatura($query){
        return $query->where('codigoMedicion', 1);
    }

    public function scopeHumedad($query){
        return $query->where('codigoMedicion', 2);
    }

    public function scopeViento($query){
        return $query->where('codigoMedicion', 4);
    }

    public function scopePresionBarometrica($query){
        return $query->where('codigoMedicion', 6);
    }

    public function scopePrecipitacion($query){
        return $query->where('codigoMedicion', 10);
    }
}
