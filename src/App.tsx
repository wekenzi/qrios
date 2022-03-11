import React, { useCallback, useState } from 'react';
import './App.css';
import { Item } from "./components/Item/Item";
import { Popup } from "./components/Popup/Popup";
import { IItem } from './utils/IItem';
import { useFetch } from './utils/useFetch';


function App() {

  const randomSize = useCallback(() => Boolean(Math.round(Math.random())),[]) 
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products/')
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IItem | null>();
 
  const openPopup = (id:number) => {
    setPopupIsOpen(true);
    setSelectedItem(data.find((item:IItem) => item.id === id))
  }

  const closePopup = () => {
    setPopupIsOpen(false);
    setSelectedItem(null)
  }

  return (
    <div className="App" id='appWrapper'>
      {popupIsOpen && <Popup selectedItem={selectedItem} closePopup={closePopup} />}
      <h1 className='header'>Qrios Shop</h1>
      {loading && <div className='loader'>Loading...</div>}
      <div className='grid-container'>
        { data && <>
            { 
              data.map((item:IItem) => <Item key={item.id} {...item} randomSize={randomSize} openPopup={openPopup} />) 
            }
          </> 
        }
      </div>
    </div>
  );
}

export default App;
