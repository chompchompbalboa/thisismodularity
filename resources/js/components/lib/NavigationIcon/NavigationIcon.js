/**
* NavigationDefault.js
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

/**
* NavigationDefault
*
* @module NavigationDefault
*/
class NavigationDefault extends React.Component {

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
    handleClick(e, visible) {
        let changes = [
            {key: "site.state.menu", value: (visible ? false : true)}
        ];
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(container, state) {
        return {
            style: {
                all: {
                    zIndex: "1000",
                    cursor: "pointer",
                    position: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1em",
                    fontFamily: "Space Mono",
                    borderRadius: "7.5px",
                    transition: "top 0.5s, left 0.5s, background-color 0.25s"
                },
                mobile: {
                    padding: Utils.buildVH(container, 0.75),
                    top: "calc(12.5vh + " + Utils.buildVH(container, 2) + ")",
                    left: "calc(27.5vw + ((72.5vw - ((75vh * 9)/16)) / 2) + " + Utils.buildVH(container, 2) + ")"
                },
                tablet: {
                    padding: Utils.buildVH(container, 0.75),
                    top: "calc(3.5vh + " + Utils.buildVH(container, 2) + ")",
                    left: "calc(27.5vw + ((72.5vw - ((93vh * 3)/4)) / 2) + " + Utils.buildVH(container, 2) + ")"
                },
                desktop: {
                    padding: Utils.buildVH(container, 0.75),
                    top: "calc(0vh + " + Utils.buildVH(container, 2) + ")",
                    left: "calc(4vw + " + Utils.buildVH(container, 2) + ")"
                }
            }
        }
    }

    /**
    * Settings for: __icon
    *
    * @function __icon
    * @return {object}
    */
    __icon(visible) {
        if(visible) {
            return (
                <div>&#x2715; EXIT</div>
            )
        }
        else {
            return (
                <div>&#9776; MENU</div>
            )
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {container, content, ...other} = this.props;
        let visible = content.site.state.menu;
        let _div = this._div(container, visible);
        let __icon = this.__icon(visible);
        return (
            <div className="hoverNavigationIcon" style={[_div.style[container.device], _div.style.all]} onClick={(e) => this.handleClick(e, visible)}>
                {__icon}
            </div>
        )
    }    
}
module.exports = Radium(NavigationDefault);