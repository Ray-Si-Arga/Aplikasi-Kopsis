<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\VendorController;

Route::get('/vendors', [VendorController::class, 'index'])->name('api.vendors.index');
Route::delete('/vendors/{vendor}', [VendorController::class, 'destroy'])->name('api.vendors.destroy');