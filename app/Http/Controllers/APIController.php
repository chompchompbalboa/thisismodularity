<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Models\Sites;
use App\Models\User;

use App\Services\SiteLoader;

class APIController extends Controller
{
    /**
    * Constructor
    *
    * @requires Request
    * @requires Sites
    * @requires User
    */
    public function __construct(Request $request, SiteLoader $siteLoader, Sites $sites, User $user)
    {
        $this->app = app();
        $this->request = $request;
        $this->siteLoader = $siteLoader;
        $this->sites = $sites;
        $this->user = $user;
    }

    /**
     * API
     *
     * @return Response
     */
    public function api()
    {
      dd('api');
        $request = $this->request->input('request');
        $data = json_decode($this->request->input('data'), true);
        switch($request) {
            case "INITIAL_CONTENT":
                $response = [
                    [
                        "key" => "app",
                        "value" => $this->initialApp($request, $data)
                    ],
                    [
                        "key" => "site",
                        "value" => $this->initialSite($request, $data)
                    ],
                ];
            break;
            case "SAVE_SITE":
                $saveSite = $data['content']['site'];
                $site = $this->sites->firstOrNew(['domain' => $saveSite['meta']['domain']]);
                $site['versions'] = [
                    "active" => $saveSite
                ];
                if($site->save()) {
                    $response = [
                        [
                            "key" => "app.state.save",
                            "value" => "success"
                        ]
                    ];
                }
                else {
                   $response = [
                        [
                            "key" => "app.state.save",
                            "value" => "failed"
                        ]
                    ]; 
                }
            break;
        }
        return json_encode($response);
    }


    /**
     * Initial App
     *
     * @return array
     */
    public function initialApp($request, $data)
    {
        return [
            "state" => [
                "device" => "mobile",
                "save" => "ready",
                "App" => "AppDashboard",
                "AppDashboard" => "AppDashboardVisible",
                "AppDashboardOverview" => [
                    "position" => "center"
                ],
                "AppDashboardPage" => [
                    "page" => "1",
                    "position" => "right"
                ],
                "AppDashboardModules" => [
                    "page" => "1",
                    "position" => "right"
                ],
                "AppDashboardNavigation" => [
                    "position" => "right"
                ],
                "AppDashboardEdit" => [
                    "page" => "1",
                    "module" => "1",
                    "position" => "right"
                ],
                "AppDashboardImages" => [
                    "page" => "1",
                    "module" => "1",
                    "position" => "right"
                ],
            ],
            "modules" => [
                "Image" => [
                    "header" => "Image",
                    "module" => "Image",
                    "props" => [
                        "backgroundImage" => "/img/stock/5.jpg",
                        "height" => [
                            "mobile" => 50,
                            "tablet" => 50,
                            "desktop" => 50,
                        ],
                        "position" => [
                            "mobile" => [
                                "top" => 0,
                                "left" => 0,
                            ],
                            "tablet" => [
                                "top" => 0,
                                "left" => 0,
                            ],
                            "desktop" => [
                                "top" => 0,
                                "left" => 0,
                            ],
                        ],
                        "width" => [
                            "mobile" => 100,
                            "tablet" => 100,
                            "desktop" => 100,
                        ]
                    ]
                ],
                "TextBox" => [
                    "header" => "Text Box",
                    "module" => "TextBox",
                    "props" => [
                        "fontFamily" => "Space Mono",
                        "fontSize" => [
                            "mobile" => 14,
                            "tablet" => 14,
                            "desktop" => 14,
                        ],
                        "position" => [
                            "mobile" => [
                                "top" => 0,
                                "left" => 0,
                            ],
                            "tablet" => [
                                "top" => 0,
                                "left" => 0,
                            ],
                            "desktop" => [
                                "top" => 0,
                                "left" => 0,
                            ],
                        ],
                        "text" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum vel augue ut rutrum. Cras ac efficitur purus, et faucibus ipsum. Aliquam odio felis, sollicitudin a dui vel, pharetra porta diam.",
                        "width" => [
                            "mobile" => 100,
                            "tablet" => 100,
                            "desktop" => 50,
                        ]
                    ]
                ]
            ],
            "fonts" => [
                "1" => "Source Sans Pro",
                "2" => "Space Mono"
            ],
            "images" => [
                "1" => [
                    "url" => "/img/stock/1.jpg"
                ],
                "2" => [
                    "url" => "/img/stock/2.jpg"
                ],
                "3" => [
                    "url" => "/img/stock/3.jpg"
                ],
                "4" => [
                    "url" => "/img/stock/4.jpg"
                ],
                "5" => [
                    "url" => "/img/stock/5.jpg"
                ],
                "6" => [
                    "url" => "/img/stock/6.jpg"
                ],
                "7" => [
                    "url" => "/img/stock/7.jpg"
                ],
                "8" => [
                    "url" => "/img/stock/8.jpg"
                ],
                "9" => [
                    "url" => "/img/stock/9.jpg"
                ],
                "10" => [
                    "url" => "/img/stock/10.jpg"
                ],
            ]
        ];
    }


    /**
     * Fetch Site
     *
     * @return array
     */
    public function initialSite($request, $data)
    {
        $site = $this->siteLoader->initialSite($data, $this->sites);
        $site['state'] = [];
        $site['state']['path'] = $data['url']['path'];
        $site['state']['menu'] = false;
        return $site;
    }
}