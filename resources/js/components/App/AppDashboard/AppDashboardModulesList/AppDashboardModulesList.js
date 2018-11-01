/**
* AppDashboardModulesList.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const AppDashboardContainerSection = require('../AppDashboardContainerSection/AppDashboardContainerSection');
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
const ContentActionLink = require('../../lib/ContentActionLink/ContentActionLink');
/**
* App Dashboard ModulesList
*
* @module AppDashboardModulesList
*/
class AppDashboardModulesList extends React.Component {

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
    * Settings for: _div
    *
    * @function _div
    * @return string
    */
    _div() {
        return {
            style: {
                margin: "1.5vh 0 0 0",
                width: "93vw",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-between",
                alignItems: "center",
                "@media (min-width: 64em)": {
                    width: "23.375vw"
                }
            }
        }
    }

    /**
    * Settings for: __modules
    *
    * @function __modules
    * @return string
    */
    __modules(content) {
        let payload = [];
        for(let i in content.app.modules) {
            let module = content.app.modules[i];
            payload.push(
                <ContentActionLink
                    key={i}
                    action="insertModule"
                    content={content}
                    info={{
                        page: content.app.state.AppDashboardModules.page,
                        module: module.module
                    }}
                    style="dashboard"
                    >
                    {module.header}
                </ContentActionLink>
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
        let _div = this._div();
        let __modules = this.__modules(content);
        return (
            <div style={_div.style}>
                {__modules}
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardModulesList);