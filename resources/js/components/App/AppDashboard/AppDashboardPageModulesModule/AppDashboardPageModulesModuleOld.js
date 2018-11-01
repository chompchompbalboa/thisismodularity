/**
* AppDashboardPageModulesModule.js
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
* App Dashboard PageModulesModule
*
* @module AppDashboardPageModulesModule
*/
class AppDashboardPageModulesModule extends React.Component {

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
                margin: "0 0 1.5vh 0",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "@media (min-width: 64em)": {
                    margin: "0 0 2vh 0",
                }
            }
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {content, module, moduleKey, pageKey, ...other} = this.props;
        let _div = this._div();
        return (
            <div style={_div.style}>
                <ChangeContentLink
                    changes={[
                        {key: "app.state.AppDashboardEdit.page", value: pageKey},
                        {key: "app.state.AppDashboardEdit.module", value: moduleKey},
                        {key: "app.state.AppDashboardPage.position", value: "left"},
                        {key: "app.state.AppDashboardEdit.position", value: "center"}
                    ]}
                    style="dashboard-large"
                    >
                    {module.header}
                </ChangeContentLink>
                <ContentActionLink
                    action="moduleUp"
                    content={content}
                    info={{
                        moduleKey: moduleKey,
                        pageKey: pageKey
                    }}
                    style="dashboard-text"
                >
                &uarr;
                </ContentActionLink>
                <ContentActionLink
                    action="moduleDown"
                    content={content}
                    info={{
                        moduleKey: moduleKey,
                        pageKey: pageKey
                    }}
                    style="dashboard-text"
                >
                &darr;
                </ContentActionLink>
                <ContentActionLink
                    action="moduleDelete"
                    content={content}
                    info={{
                        moduleKey: moduleKey,
                        pageKey: pageKey
                    }}
                    style="dashboard-text"
                >
                &#x2573;
                </ContentActionLink>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardPageModulesModule);