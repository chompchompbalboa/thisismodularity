/**
* AppDashboardImagesList.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const Utils = require('../../../lib/Utils');

const AppDashboardContainerSection = require('../AppDashboardContainerSection/AppDashboardContainerSection');
const AppDashboardContainerSectionHeader = require('../AppDashboardContainerSectionHeader/AppDashboardContainerSectionHeader');
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
const ContentActionLink = require('../../lib/ContentActionLink/ContentActionLink');
/**
* App Dashboard ImagesList
*
* @module AppDashboardImagesList
*/
class AppDashboardImagesList extends React.Component {

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
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container() {
        return {
            style: {
                backgroundColor: "rgba(25,25,25,0.7)",
                borderRadius: "10px",
                padding: "1vh",
                margin: "1vh 0 0 0",
                width: "calc(23.375)",
                fontSize: "0.85em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }
        }
    }

    /**
    * Settings for: _image
    *
    * @function _image
    * @return {object}
    */
    _image() {
        return {
            style: {
                width: "calc(23.375vw - 2vh)",
                height: "calc(15.375vw)",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }
        }
    }

    /**
    * Settings for: __images
    *
    * @function __images
    * @return string
    */
    __images(content) {
        let payload = [];
        let _container = this._container();
        let pageKey = content.app.state.AppDashboardImages.page;
        let moduleKey = content.app.state.AppDashboardImages.module;
        let changeImageKey = "site.pages." + pageKey + ".modules." + moduleKey + ".props.backgroundImage";
        for(let i in content.app.images) {
            let module = content.app.images[i];
            let _image = {
                style: {
                    width: "calc(23.375vw - 2vh)",
                    height: "calc(15.375vw)",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundImage: Utils.buildBackgroundImage(module.url)
                }
            };
            payload.push(
                <ChangeContentLink
                    key={i}
                    changes={[
                        {key: "app.state.AppDashboardImages.position", value: "right"},
                        {key: "app.state.AppDashboardEdit.position", value: "center"},
                        {key: changeImageKey, value: module.url}
                    ]}
                    style="navigation"
                    >
                    <div style={_container.style}>
                        <div style={_image.style}></div>
                    </div>
                </ChangeContentLink>
            );
        }
        return payload;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {content, ...other} = this.props;
        let __images;
        if (content.app.state.AppDashboardImages.position === "center") {
            __images = this.__images(content);
        }
        return (
            <AppDashboardContainerSection>
                <AppDashboardContainerSectionHeader text="Available Images"/>
                {__images}
            </AppDashboardContainerSection>
        )
    }    
}
module.exports = Radium(AppDashboardImagesList);