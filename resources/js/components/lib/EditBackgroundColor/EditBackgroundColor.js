/**
* EditBackgroundColor.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

import { SketchPicker } from 'react-color';

const contentActions = require('../../../actions/contentActions');

const EditContainer = require('../../lib/EditContainer/EditContainer');

/**
* Edit BackgroundColor
*
* @module EditBackgroundColor
*/
class EditBackgroundColor extends React.Component {

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
    * Handle Change Complete
    *
    * @function handleChangeComplete
    * @return {object}
    */
    handleChangeComplete(color, changeKey) {
        let newColor = color.rgb;
        let changes = [
            {key: changeKey, value: newColor}
        ];
        contentActions.changeContent(changes);
    }

    /**
    * Set the width for the color picker in px
    *
    * @function pickerWidth
    * @return {object}
    */
    pickerWidth() {
        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        if (windowWidth < 1024) {
            return ((windowWidth * 0.93) - (windowHeight * .02))
        }
        else {
            return ((windowWidth * 0.23375) - (windowHeight * .02))
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
        let pickerWidth = this.pickerWidth();
        let changeKey = "site.pages." + pageKey + ".modules." + moduleKey + ".props.backgroundColor";
        let color = content.site.pages[pageKey].modules[moduleKey].props.backgroundColor;
        return (
            <EditContainer header="Background Color">
                <SketchPicker 
                    color={color}
                    width={pickerWidth}
                    onChangeComplete={(color) => this.handleChangeComplete(color, changeKey)}
                />
            </EditContainer>
        )
    }    
}
module.exports = Radium(EditBackgroundColor);