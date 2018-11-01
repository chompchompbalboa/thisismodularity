/**
* AppDashboardNavigation.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const AppDashboardContainer = require('../AppDashboardContainer/AppDashboardContainer');
const AppDashboardContainerNavigation = require('../AppDashboardContainerNavigation/AppDashboardContainerNavigation');
const AppDashboardContainerSection = require('../AppDashboardContainerSection/AppDashboardContainerSection');
const AppDashboardContainerSectionHeader = require('../AppDashboardContainerSectionHeader/AppDashboardContainerSectionHeader');
const AppDashboardDevices = require('../AppDashboardDevices/AppDashboardDevices');
const ChangeContentInputText = require('../../lib/ChangeContentInputText/ChangeContentInputText');
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
const ContentActionLink = require('../../lib/ContentActionLink/ContentActionLink');
/**
* App Dashboard Navigation
*
* @module AppDashboardNavigation
*/
class AppDashboardNavigation extends React.Component {

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
    * Settings for: position
    *
    * @function position
    * @return string
    */
    position(content) {
        let position = "right";
        if(content.app 
            && content.app.state 
            && content.app.state.AppDashboardNavigation
            && content.app.state.AppDashboardNavigation.position) {
            position = content.app.state.AppDashboardNavigation.position;
        }
        return position;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {content, ...other} = this.props;
        let position = this.position(content);
        return (
            <AppDashboardContainer content={content} position={position}>
                <AppDashboardContainerNavigation>
                    <ChangeContentLink
                        changes={[
                            {key: "app.state.AppDashboardNavigation.position", value: "right"},
                            {key: "app.state.AppDashboardOverview.position", value: "center"}
                        ]}
                        style="navigation"
                        >
                        &#x2190;&nbsp;OVERVIEW
                    </ChangeContentLink>
                </AppDashboardContainerNavigation>
                <AppDashboardContainerSection>
                    <AppDashboardContainerSectionHeader text="Device"/>
                    <AppDashboardDevices />
                </AppDashboardContainerSection>
                <AppDashboardContainerSection>
                    <AppDashboardContainerSectionHeader text="Edit"/>
                </AppDashboardContainerSection>
            </AppDashboardContainer>
        )
    }    
}
module.exports = Radium(AppDashboardNavigation);