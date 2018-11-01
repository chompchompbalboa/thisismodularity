/**
* ChangeContentInputText.js
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
* @module ChangeContentInputText
*/
class ChangeContentInputText extends React.Component {

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
    * Handle Change
    *
    * @function handleChange
    * @return {object}
    */
    handleChange(e, changeKeys) {
        let changes = [];
        let value = e.target.value;
        for(let i in changeKeys) {
            let changeKey = changeKeys[i];
            changes.push(
                {key: changeKey, value: value}
            );
        }
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: _style
    *
    * @function _style
    * @return {object}
    */
    _style(type) {
        let style;
        switch (type) {
            case "dashboard":
                style = {
                    margin: "0vh 2vw",
                    borderWidth: "0px",
                    borderRadius: "10px",
                    backgroundColor: "rgb(145,145,145)",
                    textAlign: "center",
                    fontSize: "1em",
                    color: "white",
                    "@media (min-width: 64em)": {
                        margin: "0vh 0.5vw",
                        width: "3.5vw",
                        height: "2vw",
                    }
                }
            break;
            case "editor":
                style = {
                    padding: "1vh 1vh",
                    borderWidth: "0px",
                    borderRadius: "10px",
                    backgroundColor: "rgb(145,145,145)",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "0.9em",
                    fontWeight: "300",
                    color: "white",
                    textAlign: "center"
                }
            break;
            case "header":
                style = {
                    width: "100%",
                    border: "none",
                    backgroundColor: "transparent",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "2em",
                    fontWeight: "400",
                    color: "white"
                }
            break;
            case "small":
                style = {
                    width: "100%",
                    padding: "0.25vw",
                    border: "none",
                    backgroundColor: "transparent",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "0.9em",
                    fontWeight: "300",
                    color: "rgb(145,145,145)"
                }
            break;
        }
        return style;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {changeKeys, style, value, ...other} = this.props;
        let _style = this._style(style);
        return (
            <input style={_style} value={value} onChange={(e) => this.handleChange(e, changeKeys)} />
        )
    }    
}
module.exports = Radium(ChangeContentInputText);