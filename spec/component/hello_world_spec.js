import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import HelloWorld from '../../src/component/hello_world'

const shallowRenderer = TestUtils.createRenderer()

describe('HelloWorld', function() {
  var elem
 
  beforeEach(function() {
    elem = shallowRenderer.render(<HelloWorld/>)
  })
  
  it("renders a div that says hello world", function() {
    expect(elem.type).toMatch('div')  
  })
})
