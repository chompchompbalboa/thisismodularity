/**
* EditWidth.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const Utils = require('../../../lib/Utils');

const EditContainer = require('../../lib/EditContainer/EditContainer');
const EditNumber = require('../../lib/EditNumber/EditNumber');

/**
* Edit Width
*
* @module EditWidth
*/
class EditWidth extends React.Component {

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
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {content, pageKey, moduleKey, ...other} = this.props;
        let active = Utils.getActiveDeviceInfo(content, pageKey, moduleKey, "width");
        return (
            <EditContainer header="Width">
                {active.label}
                <EditNumber
                    changeKeys={active.changeKeys}
                    value={active.value}
                />
            </EditContainer>
        )
    }    
}
module.exports = Radium(EditWidth);