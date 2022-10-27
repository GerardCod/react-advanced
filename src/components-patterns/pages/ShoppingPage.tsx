import React from 'react';
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1234324',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product}
          className='bg-dark'>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title title='Hola mundo' className='text-white text-bold' />
          <ProductCard.Buttons className='custom-buttons'/>
        </ProductCard>

        <ProductCard 
          product={product}
          className='bg-dark'>
          <ProductImage className='custom-image' />
          <ProductTitle className='text-white text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
      </div>
    </div>
  )
}
