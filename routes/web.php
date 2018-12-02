<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('__frontend.welcome');
});

Route::get('/admin', function () {
    return view('__backend.welcome');
});

/*
    GET /api/admins
    POST /api/admins
    PUT /api/admins/{admin}
    PATCH /api/admins/{admin}
    DELETE /api/admins/{admin}
 */

Route::namespace('Api')->prefix('api')->group(function () {
    Route::resource('admins', 'AdminsController', [
        'except' => ['create', 'edit']
    ]);
});