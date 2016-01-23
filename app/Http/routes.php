<?php

use App\DiaryEntries;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return view('index-angular');
});

$app->group(['prefix' => 'api/v1'], function () use ($app) {

    $app->get('diary/entries', function () {
        return response()->json([
            'status' => 'success',
            'data' => DiaryEntries::all()
        ]);
    });

    $app->get('diary/entries/{id}', function ($id) {
        return response()->json([
            'status' => 'success',
            'data' => DiaryEntries::find($id)
        ]);
    });

    $app->post('diary/entries', function (Request $request) {
        $diaryEntry = DiaryEntries::create($request->all());

        return response()->json([
            'status' => 'success',
            'data' => $diaryEntry
        ]);
    });

    $app->put('diary/entries/{id}', function (Request $request, $id) {
        $diaryEntry = DiaryEntries::find($id)->update($request->all());
        $diaryEntry = DiaryEntries::find($id);

        return response()->json([
            'status' => 'success',
            'data' => $diaryEntry
        ]);
    });

    $app->patch('diary/entries/{id}', function (Request $request, $id) {
        $diaryEntry = DiaryEntries::find($id)->update($request->all());
        $diaryEntry = DiaryEntries::find($id);

        return response()->json([
            'status' => 'success',
            'data' => $diaryEntry
        ]);
    });

    $app->delete('diary/entries/{id}', function ($id) {
        $diaryEntry = DiaryEntries::destroy($id);

        return response()->json([
            'status' => 'success'
        ]);
    });

    $app->options('diary/entries', function () {
        return response()->json([
            'status' => 'success'
        ]);
    });

});

