import React from 'react';
import { IItem } from '../../utils/IItem';
import './Popup.css';

export const Popup = ({ selectedItem, closePopup } : { selectedItem?:IItem | null | undefined , closePopup:Function}) => {
  
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={() => closePopup()}>x</span>
        <img src={selectedItem?.image} />
        <h4>{selectedItem?.title}</h4>
        <p>{selectedItem?.description}</p>
        <span className='price'>$ {selectedItem?.price}</span>
      </div>
    </div>
  )
}
