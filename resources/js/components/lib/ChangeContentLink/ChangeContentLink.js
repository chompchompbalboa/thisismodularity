/**
* ChangeContentLink.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const contentActions = require('../../../actions/contentActions');

/**
* App DashboardDocked
*
* @module ChangeContentLink
*/
class ChangeContentLink extends React.Component {

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
    * Handle Click
    *
    * @function handleClick
    * @return {object}
    */
    handleClick(e) {
        e.preventDefault();
        contentActions.changeContent(this.props.changes);
    }



    /**
    * Settings for: _style
    *
    * @function _style
    * @return {object}
    */
    _style(type) {
        let style;
        let hover;
        switch (type) {
            case "dashboard":
                style = {
                    margin: "0 0 1.5vh 0",
                    width: "41.85vw",
                    height: "5vh",
                    cursor: "pointer",
                    borderRadius: "5px",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "0.75em",
                    fontWeight: "400",
                    color: "white",
                    textTransform: "uppercase",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "@media (min-width: 64em)": {
                        margin: "0 0 2vh 0",
                        borderRadius: "10px",
                        width: "10.51875vw",
                        height: "5vh",
                    }
                };
                hover = "hoverAppDashboardButton";
            break;
            case "dashboard-large":
                style = {
                    width: "41.85vw",
                    height: "5vh",
                    cursor: "pointer",
                    borderRadius: "5px",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "0.75em",
                    fontWeight: "400",
                    color: "white",
                    textTransform: "uppercase",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "@media (min-width: 64em)": {
                        borderRadius: "10px",
                        width: "15.19375vw",
                        height: "5vh",
                    }
                };
                hover = "hoverAppDashboardButton";
            break;
            case "device":
                style = {
                    borderRadius: "10px",
                    cursor: "pointer",
                };
                hover = "hoverAppDeviceLink";
            break;
            case "docked":
                style = {
                    cursor: "pointer",
                    display: "none",
                    transition: "color 0.25s",
                    "@media (min-width: 64em)": {
                        display: "block",
                        height: "8vh",
                        width: "4vw",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                };
                hover = "hoverAppLink";
            break;
            case "header":
                style = {
                    cursor: "pointer",
                    display: "none",
                    transition: "color 0.25s",
                    "@media (min-width: 64em)": {
                        display: "block",
                        margin: "0 1.25vw 0 0"
                    }
                };
                hover = "hoverAppLink";
            break;
            case "navigation":
                style = {
                    cursor: "pointer",
                };
                hover = "hoverAppLink";
            break;
            default:
                style = {cursor: "pointer"};
                hover = {};
            break;
        }
        return {hover: hover, style: style};
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {children, style, ...other} = this.props;
        let _style = this._style(style);
        return (
            <a className={_style.hover} style={_style.style} onClick={(e) => this.handleClick(e)}>
                {children}
            </a>
        )
    }    
}
module.exports = Radium(ChangeContentLink);