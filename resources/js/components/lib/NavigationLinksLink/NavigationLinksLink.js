/**
* NavigationLinksLink.js
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
* NavigationLinksLink
*
* @module NavigationLinksLink
*/
class NavigationLinksLink extends React.Component {

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
    handleClick(e, path) {
        e.preventDefault();
        let changes = [
            {key: "site.state.path", value: path},
            {key: "site.state.menu", value: false}
        ];
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a(container) {
        return {
            style: {
                all: {
                    textDecoration: "none",
                    color: "black",
                    marginBottom: Utils.buildVH(container, 1)
                },
                mobile: {
                },
                tablet: {
                },
                desktop: {
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
        let {container, page, ...other} = this.props;
        let _a = this._a(container);
        return (
            <a href={page.path} style={[_a.style[container.device], _a.style.all]} onClick={(e) => this.handleClick(e, page.path)}>
                {page.name}
            </a>
        )
    }    
}
module.exports = Radium(NavigationLinksLink);