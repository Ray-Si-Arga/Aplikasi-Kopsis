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

Route::get('/produk', function () {
    return view('app.produkr');
});

Route::get('/stok_terkini', function () {
    return view('app.stok_terkini');
});

Route::get('/barang_masuk', function () {
    return view('app.barang_masuk');
});

Route::get('/barang_keluar', function () {
    return view('app.barang_keluar');
});

Route::get('/riwayat_transaksi', function () {
    return view('app.riwayat_transaksi');
});

Route::get('/pengguna', function () {
    return view('app.pengguna');
});
