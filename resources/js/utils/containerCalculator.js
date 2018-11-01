//-----------------------------------------------------------------------------
// Container Dimensions
//-----------------------------------------------------------------------------
export const containerDimensions = {
  SITE: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  MOBILE: {
    width: (((window.innerHeight * 0.75) * 9) / 16),
    height: (window.innerHeight * 0.75)
  },
  TABLET: {
    width: (((window.innerHeight * 0.93) * 3) / 4),
    height: (window.innerHeight * 0.93)
  },
  DESKTOP: {
    width: window.innerWidth * 0.96,
    height: window.innerHeight
  }
}

//-----------------------------------------------------------------------------
// Calculator
//-----------------------------------------------------------------------------
export const calculator = {
  backgroundImage: (activeDevice, backgroundImage) => {
    return "url(" + backgroundImage + ")"
  },
  fontSize: (activeDevice, fontSize) => {
    return (
      ((containerDimensions[activeDevice].height * (fontSize[activeDevice] / 100)) / 5) + "px "
    )
  },
  height: (activeDevice, height) => {
    if(height[activeDevice].auto) {
      return "auto"
    }
    return (containerDimensions[activeDevice].height * (height[activeDevice].value / 100)) + "px"
  },
  padding: (activeDevice, padding) => {
    return (
      (containerDimensions[activeDevice].height * (padding[activeDevice].TOP / 100)) + "px " +
      (containerDimensions[activeDevice].width * (padding[activeDevice].RIGHT / 100)) + "px " +
      (containerDimensions[activeDevice].height * (padding[activeDevice].BOTTOM / 100)) + "px " +
      (containerDimensions[activeDevice].width * (padding[activeDevice].LEFT / 100)) + "px"
    )
  },
  width: (activeDevice, width) => {
    if(width[activeDevice].auto) {
      return "auto"
    }
    return (containerDimensions[activeDevice].width * (width[activeDevice].value / 100)) + "px"
  },
}


//-----------------------------------------------------------------------------
// Get Device Style
//-----------------------------------------------------------------------------
export const getDeviceStyle = ( activeDevice, isApp ) => {
  let deviceStyle = {};
  let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (!isApp || windowWidth < 1024) {
    deviceStyle = {
      position: "fixed",
      top: "0vh",
      left: "0vw",
      width: "100vw",
      height: "100vh",
      overflowY: "scroll",
      boxShadow: "none"
    }
  }
  else {
      switch (activeDevice) {
          case "DESKTOP":
              deviceStyle = {
                  position: "absolute",
                  top: "0vh",
                  left: "4vw",
                  width: "96vw",
                  height: "100vh",
                  overflowY: "scroll",
                  overflowX: "hidden",
                  backgroundColor: "white",
                  transition: "all 0.5s",
                  boxShadow: "none"
              }
          break;
          case "TABLET":
              deviceStyle = {
                  position: "absolute",
                  top: "3.5vh",
                  left: "calc(27.5vw + ((72.5vw - ((93vh * 3)/4)) / 2))",
                  width: "calc((93vh * 3)/4)",
                  height: "93vh",
                  overflowY: "scroll",
                  overflowX: "hidden",
                  backgroundColor: "white",
                  transition: "all 0.5s",
                  boxShadow: "2px 2px 5px black"
              }
          break;
          default:
              deviceStyle = {
                  position: "absolute",
                  top: "12.5vh",
                  left: "calc(27.5vw + ((72.5vw - ((75vh * 9)/16)) / 2))",
                  width: "calc((75vh * 9)/16)",
                  height: "75vh",
                  overflowY: "scroll",
                  overflowX: "hidden",
                  backgroundColor: "white",
                  transition: "all 0.5s",
                  boxShadow: "2px 2px 5px black"
              }
          break;
      }
  }
  return deviceStyle;
}