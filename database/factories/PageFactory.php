<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Page::class, function (Faker $faker) {
    return [
        'site_id' => 1,
        'name' => $faker->word,
        'slug' => $faker->domainWord,
        'modules' => json_encode([])
    ];
});
