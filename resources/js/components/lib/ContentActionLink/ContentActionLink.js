/**
* ContentActionLink.js
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
* @module ContentActionLink
*/
class ContentActionLink extends React.Component {

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
    handleClick(e, action, content, info) {
        e.preventDefault();
        contentActions[action](content, info);
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
                        width: "15.19375vw",
                        height: "5vh",
                    }
                };
                hover = "hoverAppDashboardButton";
            break;
            case "dashboard-text":
                style = {
                    cursor: "pointer",
                    width: "2vw",
                    height: "2vw",
                    borderRadius: "5px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "@media (min-width: 64em)": {
                        borderRadius: "10px",
                    }
                };
                hover = "hoverAppDashboardText";
            break;
            case "delete":
                style = {
                    width: "93vw",
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
                        width: "23.375vw",
                    }
                };
                hover = "hoverAppDelete";
            break;
            case "save":
                style = {
                    width: "93vw",
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
                        width: "23.375vw",
                    }
                };
                hover = "hoverAppSave";
            break;
            case "save-success":
                style = {
                    width: "93vw",
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
                    backgroundColor: "rgba(0,0,255,1)",
                    "@media (min-width: 64em)": {
                        margin: "0 0 2vh 0",
                        borderRadius: "10px",
                        width: "23.375vw",
                    }
                };
                hover = "";
            break;
            case "save-fail":
                style = {
                    width: "93vw",
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
                    backgroundColor: "rgba(255,0,0,1)",
                    "@media (min-width: 64em)": {
                        margin: "0 0 2vh 0",
                        borderRadius: "10px",
                        width: "23.375vw",
                    }
                };
                hover = "";
            break;
            case "saving":
                style = {
                    width: "93vw",
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
                    backgroundColor: "rgba(150,150,0,1)",
                    "@media (min-width: 64em)": {
                        margin: "0 0 2vh 0",
                        borderRadius: "10px",
                        width: "23.375vw",
                    }
                };
                hover = "";
            break;
            default:
                style = {};
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
        let {action, children, content, info, style, ...other} = this.props;
        let _style = this._style(style);
        return (
            <a className={_style.hover} style={_style.style} onClick={(e) => this.handleClick(e, action, content, info)}>
                {children}
            </a>
        )
    }    
}
module.exports = Radium(ContentActionLink);