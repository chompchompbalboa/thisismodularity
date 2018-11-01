//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import Image from '../Site/Image/Image'
import ImageEditor from '../Site/Image/ImageEditor'
import TextBox from '../Site/TextBox/TextBox'
import TextBoxEditor from '../Site/TextBox/TextBoxEditor'
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
export default {
  Image: {
    component: Image,
    editor: ImageEditor,
    name: "Image",
    data: {
      width: {
        MOBILE: {auto: false, value: 100},
        TABLET: {auto: false, value: 100},
        DESKTOP: {auto: false, value: 100},
      },
      height: {
        MOBILE: {auto: false, value: 50},
        TABLET: {auto: false, value: 75},
        DESKTOP: {auto: false, value: 100},
      },
      padding: {
        MOBILE: {TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0},
        TABLET: {TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0},
        DESKTOP: {TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0},
      },
      src: "/img/stock/1.jpg"
    }
  },
  TextBox: {
    component: TextBox,
    editor: TextBoxEditor,
    name: "Text Box",
    data: {
      width: {
        MOBILE: {auto: false, value: 100},
        TABLET: {auto: false, value: 100},
        DESKTOP: {auto: false, value: 100},
      },
      height: {
        MOBILE: {auto: true, value: 50},
        TABLET: {auto: true, value: 75},
        DESKTOP: {auto: true, value: 100},
      },
      fontFamily: "Source Sans Pro, sans-serif",
      fontSize: {
        MOBILE: 14,
        TABLET: 14,
        DESKTOP: 14
      },
      text: "Enter your text here.",
      padding: {
        MOBILE: {TOP: 5, RIGHT: 5, BOTTOM: 5, LEFT: 5},
        TABLET: {TOP: 5, RIGHT: 5, BOTTOM: 5, LEFT: 5},
        DESKTOP: {TOP: 10, RIGHT: 10, BOTTOM: 10, LEFT: 10},
      }
    }
  }
}