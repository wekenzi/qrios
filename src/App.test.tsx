import React from 'react';
import Enzyme , { shallow, configure }from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
Enzyme.configure({ adapter: new Adapter() });

test('renders App Component', () => {
  const AppComponent = shallow(<App />);
  const appWrapper = AppComponent.find('#appWrapper')
  expect(appWrapper.length).toBe(1);
});
