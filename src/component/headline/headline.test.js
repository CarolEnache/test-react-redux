import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAtrr, checkProps } from '../../utils';

const setUp = (props={}) => {
  const component = shallow(<Headline {...props} />);
  return component;
}

describe('Headline Component', () => {
  describe('Checking PropTypes', () => {
    const expectedProps = {
      header: 'Test Header',
      desc: 'Test Desc',
      tempArr: [{
        fName: 'Test  first name',
        lName: 'Test last name',
        email: 'Test@email.com',
        age: 23,
        onlineStatus: false,
      }]
    };

    const propsErr = checkProps(Headline, expectedProps);
    expect(propsErr).toBeUndefined();
  });

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      }
      wrapper = setUp(props);
    });

    test('it should render with no errors', () =>{
      const component = findByTestAtrr(wrapper, 'headline-component');
      expect(component.length).toBe(1);
    });

    test('it should render a H1', () => {
      const h1 = findByTestAtrr(wrapper, 'header');
      expect(h1.length).toBe(1);
    })
  });

  describe('Have NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    })

    test('should not render', () => {
      const component = findByTestAtrr(wrapper, 'headline-component');
      expect(component.length).toBe(0);
    })
  });
})