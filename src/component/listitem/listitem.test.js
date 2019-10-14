import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../utils';
import ListItem from './index';

describe('ListItem component', () => {
  describe('Checking PropTypes', () => {
    it('Renders with NO warnings', () => {
      const expectedProps = {
        title: 'Test title',
        desc: 'Test description'
      }
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined()
    });
  });

  describe('Render', () => {
    let component;
    beforeEach(() => {
      const props = {
        title: 'Test title',
        desc: 'Test description'
      };
      component = shallow(<ListItem {...props} />)
    });

    it('renders the ListItem component', () => {
      const wrapper = findByTestAtrr(component, 'list-item');
      expect(wrapper).toHaveLength(1)
    });

    it('renders the title', () => {
      const title = findByTestAtrr(component, 'list-item-title');
      expect(title).toHaveLength(1)
    });

    it('renders the description', () => {
      const desc = findByTestAtrr(component, 'list-item-desc');
      expect(desc).toHaveLength(1)
    });
  });

  describe('should NOT render', () => {
    let component;
    beforeEach(() => {
      const props = {
        desc: 'Test description'
      };
      component = shallow(<ListItem {...props} />)
    });

    it('renders the ListItem component', () => {
      const wrapper = findByTestAtrr(component, 'list-item');
      expect(wrapper).toHaveLength(0)
    });
  });
});