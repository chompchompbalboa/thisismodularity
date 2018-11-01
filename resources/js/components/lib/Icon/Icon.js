//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React from 'react'
import { string } from 'prop-types'

import icons from './icons'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const Icon = ({ icon, size }) => {

  const styles = {
    svg: {
    },
    path: {
      fill: "currentColor"
    }
  }

  return (
    <svg
      style={styles.svg}
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 1024 1024"
      >
      <path
        style={styles.path}
        d={icons[icon]}
      ></path>
    </svg>
  )
}

//------------------------------------------------------------------------------
// Props
//------------------------------------------------------------------------------
Icon.propTypes = {
  icon: string,
  size: string
}

Icon.defaultProps = {
  icon: "chevronUp",
  size: "24px"
}

export default Icon