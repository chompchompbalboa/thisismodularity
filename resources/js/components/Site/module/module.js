//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const module = (WrappedModule) => {
  return class Wrapper extends Component {
    
    constructor(props) {
      super(props)
      this.module = React.createRef();
    }
    
    componentDidUpdate = () => {
      const {
        activeModule,
        moduleIndex
      } = this.props
      if (activeModule === moduleIndex) {
        this.module.current.scrollIntoView()
      }
    }

    render() {
      return (
        <WrappedModule
          moduleRef={this.module}
          {...this.props}/>
      )
    }
  }
}

export default module