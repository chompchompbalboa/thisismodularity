/**
* EditPosition.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const Utils = require('../../../lib/Utils');
const contentActions = require('../../../actions/contentActions');

const EditContainer = require('../../lib/EditContainer/EditContainer');

/**
* Edit Position
*
* @module EditPosition
*/
class EditPosition extends React.Component {

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
    */
    handleClick(e, direction, changeKeys, value) {
        let changes = [];
        let newValue;
        let side;
        switch(direction) {
            case "up":
                newValue = value.top - 1;
                side = ".top";
            break;
            case "right":
                newValue = value.left + 1;
                side = ".left";
            break;
            case "down":
                newValue = value.top + 1;
                side = ".top";
            break;
            case "left":
                newValue = value.left - 1;
                side = ".left";
            break;
        }
        for (let i in changeKeys) {
            changes.push(
                {key: changeKeys[i] + side, value: newValue}
            )
        }
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: _button
    *
    * @function _button
    * @return {object}
    */
    _button(type) {
        return {
            style: {
                margin: "0 1vw 0 1vw",
                cursor: "pointer",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.9em",
                "@media (min-width: 64em)": {
                    width: "2vw",
                    height: "2vw",
                }
            }
        }
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _innerContainer
    *
    * @function _innerContainer
    * @return {object}
    */
    _innerContainer() {
        return {
            style: {
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
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
        let {content, pageKey, moduleKey, ...other} = this.props;
        let active = Utils.getActiveDeviceInfo(content, pageKey, moduleKey, "position");
        let _button = this._button();
        let _container = this._container();
        let _innerContainer = this._innerContainer();
        return (
            <EditContainer header="Position">
                {active.label}
                <div style={_container.style}>
                    <div style={_innerContainer.style}>
                        <div className="hoverAppCounterButton" style={_button.style} onClick={(e) => this.handleClick(e, "up", active.changeKeys, active.value)}>&uarr;</div>
                    </div>
                    <div style={_innerContainer.style}>
                        <div className="hoverAppCounterButton" style={_button.style} onClick={(e) => this.handleClick(e, "left", active.changeKeys, active.value)}>&larr;</div>
                        <div className="hoverAppCounterButton" style={_button.style} onClick={(e) => this.handleClick(e, "right", active.changeKeys, active.value)}>&rarr;</div>
                    </div>
                    <div style={_innerContainer.style}>
                        <div className="hoverAppCounterButton" style={_button.style} onClick={(e) => this.handleClick(e, "down", active.changeKeys, active.value)}>&darr;</div>
                    </div>
                </div>
            </EditContainer>
        )
    }    
}
module.exports = Radium(EditPosition);