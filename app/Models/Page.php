<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
  // Define which attributes will be visible
  protected $visible = ['id', 'site_id', 'name', 'slug', 'modules'];
  protected $casts = [
      'modules' => 'array'
  ];
}
