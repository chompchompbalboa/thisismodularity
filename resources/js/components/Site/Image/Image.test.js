//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import 'jest-styled-components'
import { cleanup, render } from '../../../utils/test-utils'

import Image from './Image'

//-----------------------------------------------------------------------------
// Setup
//-----------------------------------------------------------------------------
afterEach(cleanup)
const component = () => {
  const renderedComponent = render(<Image />)
  return {
    ...renderedComponent
  }
}
//-----------------------------------------------------------------------------
// Tests
//-----------------------------------------------------------------------------
describe('Image', () => {
  it('renders correctly using default props', () => {
    const { getByTestId } = component()
    const container = getByTestId('container')
    const image = getByTestId('image')

    expect(container).toMatchSnapshot()
    expect(container).toHaveStyleRule('width', '324px')
    expect(container).toHaveStyleRule('height', '288px')
    expect(container).toHaveStyleRule('padding', '28.8px 16.2px 28.8px 16.2px')

    expect(image).toHaveStyleRule('background-image', 'url(/img/stock/1.jpg)')
  })
})