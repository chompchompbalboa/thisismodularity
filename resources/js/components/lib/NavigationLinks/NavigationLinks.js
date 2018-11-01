/**
* NavigationLinks.js
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

const NavigationLinksLink = require('../NavigationLinksLink/NavigationLinksLink');

/**
* NavigationLinks
*
* @module NavigationLinks
*/
class NavigationLinks extends React.Component {

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
    * @return {object}
    */
    _div(container, visible) {
        return {
            style: {
                all: {
                    zIndex: (visible ? "999" : "-1"),
                    opacity: (visible ? "1" : "0"),
                    position: "fixed",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.25em",
                    fontFamily: "Space Mono",
                    backgroundColor: "white",
                    transition: "opacity 0.5s, z-index 0.5s"
                },
                mobile: {
                    top: "calc(12.5vh)",
                    left: "calc(27.5vw + ((72.5vw - ((75vh * 9)/16)) / 2))",
                    width: Utils.buildVW(container, 100),
                    height: Utils.buildVH(container, 100)
                },
                tablet: {
                    top: "calc(3.5vh)",
                    left: "calc(27.5vw + ((72.5vw - ((93vh * 3)/4)) / 2))",
                    width: Utils.buildVW(container, 100),
                    height: Utils.buildVH(container, 100)
                },
                desktop: {
                    top: "0vh",
                    left: "4vw",
                    width: Utils.buildVW(container, 100),
                    height: Utils.buildVH(container, 100)
                }
            }
        }
    }

    /**
    * Settings for: __links
    *
    * @function __links
    * @return {object}
    */
    __links(container, pages) {
        let payload = [];
        for(let i in pages) {
            let page = pages[i];
            payload.push(
                <NavigationLinksLink
                    key={i}
                    container={container}
                    page={page}
                />
            )
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
        let {container, content, menu, toggleMenu, ...other} = this.props;
        let visible = content.site.state.menu;
        let _div = this._div(container, visible);
        let __links = this.__links(container, content.site.pages);
        return (
            <div style={[_div.style[container.device], _div.style.all]}>
                {__links}
            </div>
        )
    }    
}
module.exports = Radium(NavigationLinks);