<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'nombre'=>'required|string|min:2',
            'apellido'=>'required|string|min:2',
            'email'=>'required|email|unique:users,email,'.$this->user->id,
            'dni'=>'required|digits_between:7,8|unique:users,dni,'.$this->user->id,
            'rol'=>'required',
        ];
    }
}
