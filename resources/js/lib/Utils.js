/**
* Utils.js
* @copyright thisismodularity.com, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*/

/**
* Utils
*
* A collection of utility functions for our app
*
* @module Utils
*/
var Utils = {

    /**
    * Build Background Image
    *
    * @requires {object} color
    */
    buildBackgroundImage(url) {
        return "url(" + url + ")";
    },

    /**
    * Build Font Family
    *
    * @requires {object} fontFamily
    */
    buildFontFamily(fontFamily) {
        return fontFamily;
    },

    /**
    * Build Font Size
    *
    * @requires {object} fontSize
    */
    buildFontSize(container, fontSize) {
        return fontSize + "px";
    },

    /**
    * Build RGBA
    *
    * From an object of {r: #, g: #, b: #, a: #}, build a string "rgba(#, #, #, #)"
    *
    * @requires {object} color
    */
    buildRGBA(color) {
        return "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
    },

    /**
    * Build Top
    *
    * @requires {object} container
    * @requires {object} position
    */
    buildTop(container, position) {
        return (container.height * (position.top / 100)) + "px";
    },

    /**
    * Build Left
    *
    * @requires {object} container
    * @requires {object} position
    */
    buildLeft(container, position) {
        return (container.height * (position.left / 100)) + "px";
    },

    /**
    * Build VH
    *
    * @requires {object} container
    * @requires int height
    */
    buildVH(container, height) {
        return (container.height * (height / 100)) + "px";
    },

    /**
    * Build VW
    *
    * @requires {object} container
    * @requires int width
    */
    buildVW(container, width) {
        return (container.width * (width / 100)) + "px";
    },

    /**
    * Set the active device for editors that maintain values dependent on device type
    *
    * @requires {object} container
    * @requires int width
    */
    getActiveDeviceInfo(content, pageKey, moduleKey, prop) {
        let device = content.app.state.device;
        let module = content.site.pages[pageKey].modules[moduleKey].props[prop];
        let moduleRef = "site.pages." + pageKey + ".modules." + moduleKey + ".props." + prop;
        let active;
        switch (device) {
            case "desktop":
                active = {
                    label: "DESKTOP",
                    changeKeys: [
                        moduleRef + ".desktop" 
                    ],
                    value: module.desktop
                };
            break;
            case "tablet":
                active = {
                    label: "TABLET",
                    changeKeys: [
                        moduleRef + ".tablet" 
                    ],
                    value: module.tablet
                };
            break;
            default:
                active = {
                    label: "MOBILE",
                    changeKeys: [
                        moduleRef + ".mobile"
                    ],
                    value: module.mobile
                };
            break;
        }
        return active
    }
}
module.exports = Utils;