<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/register', function () {
    return view('auth.register');
});

Route::get('/login', function () {
    return view('auth.login');
});

Route::get('/beranda', function () {
    return view('app.beranda');
});

Route::get('/vendor', function () {
    return view('app.vendor');
});