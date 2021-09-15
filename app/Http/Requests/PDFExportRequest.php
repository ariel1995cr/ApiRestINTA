<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PDFExportRequest extends FormRequest
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
            'fechaInicio'=>'required|date_format:d/m/Y',
            'fechaFin'=>'required|date_format:d/m/Y|after_or_equal:fechaInicio',
            'mediciones'=>'required',
        ];
    }
}
