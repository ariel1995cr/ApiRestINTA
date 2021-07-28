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
}
