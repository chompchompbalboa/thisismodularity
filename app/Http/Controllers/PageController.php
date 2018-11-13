<?php

namespace App\Http\Controllers;

use App\Models\Page;

use Illuminate\Http\Request;

class PageController extends Controller
{
  public function deletePage(Int $id) {
    if(Page::destroy($id)) {
      return [
        "success" => true
      ];
    }
  }

  public function savePage (Request $request, Int $id) {
    // Closure to save the page
    $savePage = function($page, $pageDataFromRequest, $siteId) {
      $page->site_id = $siteId;
      $page->name = $pageDataFromRequest['name'];
      $page->slug = $pageDataFromRequest['slug'];
      $page->modules = $pageDataFromRequest['modules'];
      return $page->save();
    };

    // Get the data we need from the request
    $pageDataFromRequest = $request->input('page');
    $siteId = $request->input('siteId');

    // New pages are assigned a negative id on the front end
    if ($id < 0) {
      $page = new Page;
      if($savePage($page, $pageDataFromRequest, $siteId)) {
        return [
          "success" => true,
          "id" => $page->id
        ];
      }
    }
    // Otherwise, get the page and save it
    else {
      $page = Page::find($pageDataFromRequest['id']);
      if($savePage($page, $pageDataFromRequest, $siteId)) {
        return [
          "success" => true,
          "id" => $page->id
        ];
      }
    }
  }
}
