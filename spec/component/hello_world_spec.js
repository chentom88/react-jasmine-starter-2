import React from 'react'
import TestUtils from 'react-addons-test-utils'
import HelloWorld from '../../src/component/hello_world'

describe('HelloWorld', function() {
  const renderer = TestUtils.createRenderer()

  it("renders a div that says hello world", function() {
    renderer.render(<HelloWorld />)
    const component = renderer.getRenderOutput()
    expect(component.type).toMatch('div')
    expect(component.props.children).toMatch('Hello World')
  })
})
