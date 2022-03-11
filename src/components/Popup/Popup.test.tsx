import React from 'react';
import Enzyme , { shallow, configure }from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Popup } from './Popup';
Enzyme.configure({ adapter: new Adapter() });

test('renders Popup Component', () => {

  const itemData = {
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  }
  const closePopup = jest.fn;

  const PopupComponent = shallow(<Popup {...itemData} closePopup={closePopup} />);
  
  expect(PopupComponent.find('h4').length).toBe(1);
  expect(PopupComponent.find('p').text()).toEqual("");

});
