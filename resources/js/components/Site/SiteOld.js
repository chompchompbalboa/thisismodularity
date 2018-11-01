//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import Radium from 'radium'

// Navigation
import NavigationIcon from '../lib/NavigationIcon/NavigationIcon'
import NavigationLinks from '../lib/NavigationLinks/NavigationLinks'

// Modules
import Image from './Image/Image'
import TextBox from './TextBox/TextBox'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
class Site extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
    }

    /**
    * Set information about the container
    *
    * @function container
    * @return {object}
    */
    container(content) {
        let container = {};
        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        // Is this the app?
        if (!content.app) {
            // No
            container.device = this.deviceType(windowWidth);
            container.width = windowWidth;
            container.height = windowHeight;
        }
        else {
            // If we are in the app and on a desktop
            if (windowWidth > 1024) {
                let device = (content.app.state.device ? content.app.state.device : "desktop");
                container.device = device;
                switch (device) {
                    case "desktop":
                        container.width = windowWidth * 0.96;
                        container.height = windowHeight;
                    break;
                    case "tablet":
                        container.width = (((windowHeight * 0.93) * 3) / 4);
                        container.height = (windowHeight * 0.93);
                    break;
                    default: 
                        container.width = (((windowHeight * 0.75) * 9) / 16);
                        container.height = (windowHeight * 0.75);
                    break;
                }
            }
            // Tablet + mobile defaults to a blurred site behind the dashboard
            else {
                container.device = this.deviceType(windowWidth);
                container.width = windowWidth;
                container.height = windowHeight;
            }  
        }
        return container;
    }

    /**
    * Set the device type
    *
    * @function deviceType
    * @return {object}
    */
    deviceType(width) {
        let type = "mobile";
        if (width > 768 && width <= 1024) {
            type = "tablet";
        }
        else if (width > 1024){
            type = "desktop";
        }
        return type;
    }

    /**
    * Settings for: page
    *
    * @function page
    * @return {object}
    */
    page(content) {
        let pageKey = 1;
        let path = content.site.state.path;
        for (let i in content.site.pages) {
            let page = content.site.pages[i];
            if (page.path === path) {
                pageKey = i;
            }
        }
        if (typeof content.site.pages[pageKey] !== "undefined") {
            return content.site.pages[pageKey];
        }
        else {
            return {
                modules: {}
            }
        }
    }

    /**
    * Settings for: _background
    *
    * @function _background
    * @return {object}
    */
    _background() {
        return {
            style: {
                zIndex: "1",
                position: "absolute",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                height: "100vh",
                backgroundColor: "gray",
                overflow: "scroll"
            }
        }
    }

    /**
    * Settings for: _device
    *
    * @function _device
    * @return {object}
    */
    _device(content, container) {
        let payload = {};
        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (!content.app || windowWidth < 1024) {
            payload.style = {
                position: "fixed",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                height: "100vh",
                overflowY: "scroll",
            }
        }
        else {
            switch (container.device) {
                case "desktop":
                    payload.style = {
                        position: "absolute",
                        top: "0vh",
                        left: "4vw",
                        width: "96vw",
                        height: "100vh",
                        overflowY: "scroll",
                        overflowX: "hidden",
                        backgroundColor: "white",
                        transition: "all 0.5s",
                    }
                break;
                case "tablet":
                    payload.style = {
                        position: "absolute",
                        top: "3.5vh",
                        left: "calc(27.5vw + ((72.5vw - ((93vh * 3)/4)) / 2))",
                        width: "calc((93vh * 3)/4)",
                        height: "93vh",
                        overflowY: "scroll",
                        overflowX: "hidden",
                        backgroundColor: "white",
                        transition: "all 0.5s",
                        boxShadow: "2px 2px 5px black"
                    }
                break;
                default:
                    payload.style = {
                        position: "absolute",
                        top: "12.5vh",
                        left: "calc(27.5vw + ((72.5vw - ((75vh * 9)/16)) / 2))",
                        width: "calc((75vh * 9)/16)",
                        height: "75vh",
                        overflowY: "scroll",
                        overflowX: "hidden",
                        backgroundColor: "white",
                        transition: "all 0.5s",
                        boxShadow: "2px 2px 5px black"
                    }
                break;
            }
        }
        return payload;
    }

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container() {
        return {
            style: {
                position: "absolute",
                top: "0vh",
                left: "0vw",
                width: "100%"
            }
        }
    }

    /**
    * Settings for: __page
    *
    * @function __page
    * @return {object}
    */
    __page(container, modules) {
        let payload = [];
        for (let i in modules) {
            let module = modules[i];
            payload.push(
                this[module.module](container, i, module.props)
            );
        }
        return payload;
    }

    /**
    * Image
    *
    * @function Image
    * @return React Element
    */
    Image(container, key, props) {
        return (
            <Image
                key={key}
                container={container}
                {...props}
            />
        )
    }

    /**
    * TextBox
    *
    * @function TextBox
    * @return React Element
    */
    TextBox(container, key, props) {
        return (
            <TextBox
                key={key}
                container={container}
                {...props}
            />
        )
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {content, ...other} = this.props;
        let page = this.page(content);
        let container = this.container(content);
        let _background = this._background();
        let _device = this._device(content, container);
        let _container = this._container();
        let __page = this.__page(container, page.modules);
        return (
            <section id="site" style={_background.style}>
                <div style={_device.style}>
                    <div style={_container.style}>
                        <NavigationIcon 
                            content={content}
                            container={container}
                        />
                        <NavigationLinks 
                            content={content}
                            container={container}
                        />
                        {__page}
                    </div>
                </div>
            </section>
        )
    }    
}
module.exports = Radium(Site);