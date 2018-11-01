<?php
/*
* This is modularity
*
* thisismodularity.com
*/
$thisismodularity = function() {
    Route::post('/api', 'APIController@api');
    
};
Route::group(['domain' => 'thisismodularity.com'], $thisismodularity);
Route::group(['domain' => 'thisismodularity.local'], $thisismodularity);

/*
* Other sites
*/
Route::post('/api', 'APIController@api');
