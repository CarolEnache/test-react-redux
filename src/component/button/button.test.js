import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../utils';
import SharedButton from './index';

describe('SharedButton Component', () => {
  describe('Checking PropsTypes', () => {
    it('Should NOT throw a warning', () => {
      const expectedProps = {
        buttonText: 'Exmpale Button Text',
        emitEvent: () => {

        }
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('render', () => {
    let component
    beforeEach(() => {
      const props = {
        buttonText: 'Exmpale Button Text',
        emitEvent: () => {
        }
      };
      component = shallow(<SharedButton {...props} />)
    })
    it('renders the button', () => {
      const wrapper = findByTestAtrr(component, 'button-compoent');
      expect(wrapper).toHaveLength(1)
    });
  })
})