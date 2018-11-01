<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class BladeController extends Controller
{
    private $appHostname = "thisismodularity";

    /**
     * Load the blade template that contains the react container
     *
     * @return view
     */
    public function load()
    {
        if ($this->isApp()) {
            $data = $this->appData();
        }
        else {
            $data = $this->siteData();
        }
        return view('content', ["data" => $data]);
    }

    /**
     * Get Hostname
     *
     * @return string
     */
    public function getHostname()
    {
        return (explode("/", explode("://", url('/'))[1])[0]);
    }

    /**
     * Is App?
     *
     * @return bool
     */
    public function isApp()
    {
        return ($this->appHostname === explode(".", $this->getHostname())[0]);
    }

    /**
     * App Data
     *
     * @return array
     */
    public function appData()
    {
        return [
            "title" => "Modularity"
        ];
    }

    /**
     * Site Data
     *
     * @return array
     */
    public function siteData()
    {
        return [
            "title" => "An awesome website"
        ];
    }
}