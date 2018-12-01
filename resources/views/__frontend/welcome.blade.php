<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name') }}</title>

        <link rel="stylesheet" href="{{ _asset('css/__frontend/vendor.css') }}">
        <link rel="stylesheet" href="{{ _asset('css/__frontend/app.css') }}">
    </head>

    <body>
        <div id="root"></div>

        <script src="{{ _asset('js/__frontend/vendor.js') }}"></script>
        <script src="{{ _asset('js/__frontend/app.js') }}"></script>
    </body>
</html>
