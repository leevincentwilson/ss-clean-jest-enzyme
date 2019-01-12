import { configure, shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import HelloWorld from './index';

configure({ adapter: new Adapter() });

describe('<HelloWorld />', () => {
  test('It should render the hello world component', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
