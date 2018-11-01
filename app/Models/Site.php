<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
  // Define which attributes will be visible
  protected $visible = ['id', 'meta', 'active', 'pages'];
  protected $with = ['pages'];

  // Build custom attributes
  protected $appends = ['meta', 'active'];

  public function getMetaAttribute() {
    return [
      "name" => $this->name,
      "domain" => $this->domain
    ];
  }

  public function getActiveAttribute() {
    return [
      "page" => 0,
      "module" => 0
    ];
  }

  public function pages() {
    return $this->hasMany('App\Models\Page');
  }
}
