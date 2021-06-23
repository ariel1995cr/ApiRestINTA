<?php

namespace App\Http\Controllers\Admin;

use App\Events\UserRegistered;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    private $usuario;

    public function __construct(){
        $this->usuario = new User();
    }
    public function index(){
        return $this->usuario::simplePaginate(10);
    }

    public function login(Request $request)
    {
        if(!Auth::attempt($request->only('email', 'password'))){
            return response()->json([
                'message'=>'Invalid login.'
            ], 404);
        }

        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
        'access_token' => $token,
        'usuario' => Auth::user(),
        'token_type' => 'Bearer',
        ]);
    }

    public function store(Request $request)
    {
        $this->usuario->nombre = $request->nombre;
        $this->usuario->apellido = $request->apellido;
        $this->usuario->email = $request->email;
        $this->usuario->password = $request->password;
        $this->usuario->rol = $request->rol;
        $this->usuario->save();

        event(new UserRegistered($this->usuario));

        return response()->json([
            'data' => $this->usuario,
            'msg' => 'Usuario creado correctamente.',
        ]);
    }

    public function profile(Request $request)
    {
        return response()->json(['user' => $request->user()]);
    }

    public function refresh(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'access_token' => $token,
            'usuario' => Auth::user(),
            'token_type' => 'Bearer',
        ]);
    }

}
