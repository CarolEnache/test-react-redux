import checkPropTypes from 'check-prop-types';

export const checkProps = (component, expectedProp) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProp, 'props', component.name);
  return propsErr
}

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper;
}
