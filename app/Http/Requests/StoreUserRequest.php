<?php

namespace App\Http\Requests;

use App\Rules\Recaptcha;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Password;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'dni' => 'required|digits_between:7,8|unique:users,dni',
            'nombre'=>'required|string|min:2',
            'apellido'=>'required|string|min:2',
            'email'=>'required|email|unique:users,email',
            'password' => 'required','confirmed','min:6',
            'password_confirmation' => 'required|same:password',
            'recaptcha' => 'required', new Recaptcha(),
        ];
    }
}
