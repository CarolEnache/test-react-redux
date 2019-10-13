import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils'
import Header from './index';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props}/>);
  return component;
}

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('it should render without error', () => {
    const wrapper = findByTestAtrr(component, 'header-component');
    expect(wrapper.length).toBe(1)
  })
  test('renders teh logo', () => {
    const wrapper = findByTestAtrr(component, 'logo-img');
    expect(wrapper.length).toBe(1)
  })
})

