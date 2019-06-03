<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Articles
Route::get('articles', 'ArticleController@index');

Route::get('articles/{id}', 'ArticleController@show')->middleware('auth:api');

Route::post('articles', 'ArticleController@store')->middleware('auth:api');

Route::put('articles', 'ArticleController@store')->middleware('auth:api');

Route::delete('articles', 'ArticleController@destroy')->middleware('auth:api');

//Comments
Route::get('comments', 'CommentController@index');

Route::get('comments/{id}', 'CommentController@show')->middleware('auth:api');

Route::post('comments', 'CommentController@store');

Route::put('comments', 'CommentController@store')->middleware('auth:api');

Route::delete('comments', 'CommentController@destroy')->middleware('auth:api');
Route::post('/login', 'Api\AuthController@login')->name('login.api');
Route::post('/register', 'Api\AuthController@register')->name('register.api');

//Login
Route::middleware(['auth:api', 'json.response'])->group(function () {
    
});
// Route::group(['middleware' => ['json.response']], function () {

//     // Route::middleware('auth:api')->get('/user', function (Request $request) {
//     //     return $request->user();
//     // });

//     // public routes
//     // Route::post('/login', 'Api\AuthController@login')->name('login.api');
//     // Route::post('/register', 'Api\AuthController@register')->name('register.api');

//     // private routes
//     Route::middleware('auth:api')->group(function () {

//         Route::get('/logout', 'Api\AuthController@logout')->name('logout');

//         Route::get('articles', 'ArticleController@index');
//     });

// });