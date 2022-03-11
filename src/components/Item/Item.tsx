import React from 'react';
import { IItem } from '../../utils/IItem';
import './Item.css';

export const Item = ({ id, image, title, randomSize, openPopup } : IItem) => {
  return (
    <div className='item' onClick={() => openPopup(id)}>
      <img className={randomSize() ? 'landscape' :'portrait'} src={image} />
      <p>Title: {title}</p>
    </div>
  )
}
