<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estacion extends Model
{
    use HasFactory;

    protected $table = 'estaciones';

    protected $fillable = ['denominacion', 'idExterna', 'identificacion'];

    protected $casts = [
        'created_at' => 'string',
    ];

    public function mediciones(){
        return $this->hasMany(Mediciones::class,'codigoEstacion','id');
    }
}
