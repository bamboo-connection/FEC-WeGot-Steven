import React from 'react'
import App from '../reviews_app.js'
import ReviewTitle from '../components/review-title'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

describe('App component', () => {
	it("Has the button", function() {
		const component = shallow(<App />)
    expect(component.find('.moreButton').exists()).to.equal(true);
  });

  it("Has Title", function() {
  	const component = shallow(<ReviewTitle />)
  	expect(component.find('.brand-logo').exists()).to.equal(true);
  })
})

