/**
* ChangeContentInputTextArea.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const TextareaAutosize = require('react-autosize-textarea');

const contentActions = require('../../../actions/contentActions');

/**
* Change Content Input Text Area
*
* @module ChangeContentInputTextArea
*/
class ChangeContentInputTextArea extends React.Component {

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
                    width: "100%",
                    border: "none",
                    backgroundColor: "transparent",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "1em",
                    fontWeight: "400",
                    color: "white"
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
            <TextareaAutosize style={_style} value={value} onChange={(e) => this.handleChange(e, changeKeys)} />
        )
    }    
}
module.exports = Radium(ChangeContentInputTextArea);