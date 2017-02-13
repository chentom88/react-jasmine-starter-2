import React from 'react'
import TestUtils from 'react-addons-test-utils'
import HelloWorld from '../../src/component/hello_world'

describe('HelloWorld', function() {
  const renderer = TestUtils.createRenderer()

  it("renders a div that says hello world", function() {
    renderer.render(<HelloWorld />)
    const result = renderer.getRenderOutput()
    expect(result.type).toMatch('div')
  })
})
