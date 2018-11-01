<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Site;

class SiteController extends Controller
{
  public function getSiteByDomain(String $domain) {
    return Site::where('domain', $domain)->first();
  }

  public function saveSite(Request $request, Int $id) {
    // Closure to save the site
    $saveSite = function($site, $siteDataFromRequest) {
      $site->name = $siteDataFromRequest['meta']['name'];
      $site->domain = $siteDataFromRequest['meta']['domain'];
      return $site->save();
    };

    // Get the data we need from the request
    $siteDataFromRequest = $request->input('site');

    // New sites are assigned a negative id on the front end
    if ($id < 0) {
      $site = new Site;
      if($saveSite($site, $siteDataFromRequest)) {
        return [
          "success" => true,
          "id" => $site->id
        ];
      }
    }
    // Otherwise, get the site and save it
    else {
      $site = Site::find($siteDataFromRequest['id']);
      if($saveSite($site, $siteDataFromRequest)) {
        return [
          "success" => true,
          "id" => $site->id
        ];
      }
    }

  }
}
