import React from 'react';
import { Item } from './Item';
import Enzyme , { shallow, configure }from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

test('renders Item component', () => {
  const itemData = {
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  }
  const randomSize = jest.fn;
  const openPopup = jest.fn;

  const ItemComponent = shallow(<Item {...itemData} randomSize={randomSize} openPopup={openPopup} />);
  
  expect(ItemComponent.find('p').length).toBe(1);
  expect(ItemComponent.find('p').text()).toEqual(`Title: ${itemData.title}`);
});
