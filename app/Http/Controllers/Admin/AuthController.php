<?php

namespace App\Http\Controllers\Admin;

use App\Events\UserRegistered;
use App\Http\Controllers\Controller;
use App\Http\Requests\changePasswordRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use http\Env\Response;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    private $usuario;

    public function __construct(){
        $this->usuario = new User();
    }
    public function index($props = null){
        if($props){
            $data = json_decode($props);
        }

        $usuarios = $this->usuario->select('id', 'dni','nombre', 'apellido', 'email', 'rol', 'created_at', 'updated_at');

        if(isset($data->pagination->sortBy)){
            if(isset($data->pagination->descending)){
                $orientation = 'desc';
            }else{
                $orientation = 'asc';
            }
            $usuarios = $usuarios->orderBy($data->pagination->sortBy,$orientation);
        }

        return $usuarios->paginate();
    }

    public function login(Request $request)
    {
        $array = [
            'dni' => $request->email,
            'password' => $request->password,
        ];

        if(!(Auth::attempt($request->only('email', 'password')) || Auth::attempt($array))){
            return response()->json([
                'message'=>'Invalid login.'
            ], 404);
        }

        $user = User::where('email', $request['email'])->orWhere('dni', $request['email'])->firstOrFail();

        if($user->email_verified_at == null){
            $user->sendEmailVerificationNotification();
            return response()->json([
                'message'=>'Tu email no esta verificado. Te enviamos tu email nuevamente al correo.'
            ], 404);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
        'access_token' => $token,
        'usuario' => Auth::user(),
        'token_type' => 'Bearer',
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        $this->usuario->dni = $request->dni;
        $this->usuario->nombre = $request->nombre;
        $this->usuario->apellido = $request->apellido;
        $this->usuario->email = $request->email;
        if($request->has('password')){
            $this->usuario->password = $request->password;
        }else{
            $this->usuario->password = 123456;
        }
        if($request->has('rol')){
            $this->usuario->rol = $request->rol;
        }
        $this->usuario->save();

        $this->usuario->sendEmailVerificationNotification();

        return response()->json([
            'data' => $this->usuario,
            'msg' => 'Usuario creado correctamente.',
        ]);
    }

    public function update(User $user, UpdateUserRequest $request)
    {
        $user->nombre = $request->nombre;
        $user->apellido = $request->apellido;
        $user->rol = $request->rol;
        $user->email = $request->email;
        $user->update();

        return response()->json([
            'data' => $this->usuario,
            'msg' => 'Usuario actualizado correctamente.',
        ]);
    }

    public function delete(User $user)
    {
        $user->delete();
        return response()->json([
            'data' => $user,
            'msg' => 'Usuario eliminado correctamente.',
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

    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return response()->json(['msg'=>'Email para validar contraseña enviado correctamente'], 202);
    }

    public function changePassword(changePasswordRequest $request)
    {
        $user = User::where('email', $request->email)->first();
        $user->password = $request->password;
        $user->remember_token = Str::random(60);
        $user->save();

        event(new PasswordReset($user));

        return response()->json(['msg'=>'Contraseña modificada correctamente.'], 202);
    }

}
