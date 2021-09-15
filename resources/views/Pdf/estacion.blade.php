<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Document</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style>
        .page-break {
            page-break-after: always;
        }
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
</head>
<body>
@foreach($filtros['Mediciones seleccionadas'] as $medida)
    <table class="table">
        <thead>
        <tr>
                @foreach($filtros as $key => $filtro)
                    @if($key == 'Mediciones seleccionadas')

                    @else
                    <th scope="col" style="text-align: left">
                        {{$key}}: {{$filtro}}
                    </th>
                    @endif
                @endforeach
                <th scope="col" style="text-align: left">
                    Mediciones seleccionada:
                    {{$medida}}
                </th>
        </tr>
        <tr>
            <th scope="col">Medicion</th>
            <th scope="col">Unidad</th>
            <th scope="col">Fecha</th>
        </tr>
        </thead>
        <tbody>
        @foreach($data[$medida] as $key => $itemTabla)
            <tr>
                @foreach(array_keys($itemTabla->toArray()) as $key)
                <td style="text-align: center">
                    {{$itemTabla->$key}}
                </td>
                @endforeach
            </tr>
        @endforeach
        </tbody>
    </table>
    <div class="page-break"></div>
@endforeach
</body>
</html>
