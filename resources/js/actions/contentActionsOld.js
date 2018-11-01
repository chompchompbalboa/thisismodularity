/**
* contentActions.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires ContentDispatcher
*/

var ContentDispatcher = require('../dispatcher/ContentDispatcher');
var objectAssign = require('object-assign');

/**
* Define the actions that shape the content
*
* @module contentActions
*/
var contentActions = {

    /**
    * Change nested content within the store
    * 
    * @function changeContent
    * @param {object} changes - The desired changes
    */
    changeContent: function(changes){
        ContentDispatcher.handleAction({
            actionType: "CHANGE_CONTENT",
            data: changes
        });
    },

    /**
    * Fetch content from the server
    * 
    * @function fetchContent
    */
    fetchContent: function(request, data){
        this._ajax(request, data);
    },

    /**
    * Insert Module
    * 
    * @function insertModule
    */
    insertModule: function(current, info){
        let next = objectAssign({}, current);
        let count = Object.keys(next.site.pages[info.page].modules).length;
        next.site.pages[info.page].modules[count + 1] = next.app.modules[info.module];
        next.app.state.AppDashboardPage.position = "center";
        next.app.state.AppDashboardModules.position = "right";
        ContentDispatcher.handleAction({
            actionType: "REPLACE_CONTENT",
            data: next
        });
    },

    /**
    * Delete Page
    * 
    * @function deletePage
    */
    deletePage: function(content, info){
        let next = objectAssign({}, content);
        let pageKey = Number(info.pageKey);
        let count = Object.keys(next.site.pages).length;
        let j = 1;
        let pages = {};
        for (let i in next.site.pages) {
            if (Number(i) !== pageKey) {
                pages[j] = next.site.pages[i];
                j = j + 1;
            }
        }
        next.site.pages = pages;
        next.app.state.AppDashboardPage.page = "1";
        next.app.state.AppDashboardPage.position = "right";
        next.app.state.AppDashboardOverview.position = "center";
        ContentDispatcher.handleAction({
            actionType: "REPLACE_CONTENT",
            data: next
        });
    },

    /**
    * Insert Page
    * 
    * @function insertPage
    */
    insertPage: function(content, info){
        let next = objectAssign({}, content);
        let count = Object.keys(content.site.pages).length;
        let nextKey = count + 1;
        let nextPath = "/page-" + nextKey;
        next.site.pages[nextKey] = {};
        next.site.pages[nextKey]["path"] = nextPath;
        next.site.pages[nextKey]["name"] = "Page " + nextKey;
        next.site.pages[nextKey]["modules"] = {};
        next.app.state.AppDashboardPage.page = nextKey;
        next.app.state.AppDashboardPage.position = "center";
        next.app.state.AppDashboardOverview.position = "left";
        next.site.state.path = nextPath;
        ContentDispatcher.handleAction({
            actionType: "REPLACE_CONTENT",
            data: next
        });
    },

    /**
    * Module Delete
    * 
    * @function moduleDelete
    */
    moduleDelete: function(content, info){
        let next = objectAssign({}, content);
        let pageKey = Number(info.pageKey);
        let moduleKey = Number(info.moduleKey);
        let count = Object.keys(next.site.pages[pageKey].modules).length;
        let j = 1;
        let modules = {};
        for (let i in next.site.pages[pageKey].modules) {
            if (Number(i) !== moduleKey) {
                modules[j] = next.site.pages[pageKey].modules[i];
                j = j + 1;
            }
        }
        next.site.pages[pageKey].modules = modules;
        ContentDispatcher.handleAction({
            actionType: "REPLACE_CONTENT",
            data: next
        });
    },

    /**
    * Module Down
    * 
    * @function moduleDown
    */
    moduleDown: function(content, info){
        let next = objectAssign({}, content);
        let pageKey = Number(info.pageKey);
        let moduleKey = Number(info.moduleKey);
        let count = Object.keys(next.site.pages[pageKey].modules).length;
        if (moduleKey < count) {
            let up = objectAssign({}, next.site.pages[pageKey].modules[moduleKey]);
            let down = objectAssign({}, next.site.pages[pageKey].modules[moduleKey + 1]);
            next.site.pages[pageKey].modules[moduleKey] = down;
            next.site.pages[pageKey].modules[moduleKey + 1] = up;
            ContentDispatcher.handleAction({
                actionType: "REPLACE_CONTENT",
                data: next
            });
        }
    },

    /**
    * Module Up
    * 
    * @function moduleUp
    */
    moduleUp: function(content, info){
        let next = objectAssign({}, content);
        let pageKey = Number(info.pageKey);
        let moduleKey = Number(info.moduleKey);
        if (moduleKey > 1) {
            let up = objectAssign({}, next.site.pages[pageKey].modules[moduleKey]);
            let down = objectAssign({}, next.site.pages[pageKey].modules[moduleKey - 1]);
            next.site.pages[pageKey].modules[moduleKey] = down;
            next.site.pages[pageKey].modules[moduleKey - 1] = up;
            ContentDispatcher.handleAction({
                actionType: "REPLACE_CONTENT",
                data: next
            });
        }
    },

    /**
    * Save Site
    * 
    * @function saveSite
    */
    saveSite: function(content, info){
        let changes = [
            {key: "app.state.save", value: "saving"}
        ];
        ContentDispatcher.handleAction({
            actionType: "CHANGE_CONTENT",
            data: changes
        });
        this.fetchContent("SAVE_SITE", {content: content});
    },

    /**
    * Send a request to the server via AJAX
    * 
    * @function _ajax
    * @param {string} request
    */
    _ajax: function(request, data) {
        $.ajax({
            method: "POST",
            url: "/api",
            headers: {
                'X-CSRF-TOKEN': this._token()
            },
            data: {
                data: this._data(data),
                request: request
            },
            dataType: 'json',
            cache: false,
            success: function(response) {
                ContentDispatcher.handleAction({
                    actionType: "CHANGE_CONTENT",
                    data: response
                });
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(status, err.toString());
            }.bind(this)
        });
    },

    /**
    * Get information about the current url
    * 
    * @function _currentURL
    * @return {string}
    */
    _currentURL: function() {
        var currentURL = {
            domain: window.location.hostname,
            path: window.location.pathname
        };
        return currentURL;
    },

    /**
    * Build the data object for an AJAX request
    * 
    * @function _data
    * @return {string}
    */
    _data: function(data) {
        if (typeof data === "undefined") {
            data = {};
        }
        data.url = this._currentURL();
        return JSON.stringify(data);
    },

    /**
    * Get the current XSRF token
    * 
    * @function _token
    * @return {string}
    */
    _token: function() {
        var token = $('meta[name="_token"]').attr('content');
        return token;
    }
};
module.exports = contentActions;