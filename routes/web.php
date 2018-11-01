<?php
/*
* This is modularity
*
* thisismodularity.com
*/
$thisismodularity = function() {
    Route::get('/site/{domain}', 'SiteController@getSiteByDomain');
    Route::post('/site/{id}', 'SiteController@saveSite');
    Route::post('/page/{id}', 'PageController@savePage');

    Route::get('/{any?}', 'BladeController@load')->where('any', '.*');
    
};
Route::group(['domain' => 'thisismodularity.com'], $thisismodularity);
Route::group(['domain' => 'thisismodularity.local'], $thisismodularity);

/*
* Other sites
*/
Route::get('/site/{domain}', 'SiteController@getByDomain');
Route::get('/{any?}', 'BladeController@load')->where('any', '.*');
