import React from 'react';
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div>
        <ProductCard
          product={product}
          initialValues={{
            count: 4,
            maxCount: 15,
          }}
          className='bg-dark text-white'>
            {
              ({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
                <>
                  <ProductImage img={product.img} className='custom-image' />
                  <ProductTitle className='text-bold' />
                  <ProductButtons className='custom-buttons' />
                </>
              )
            }
        </ProductCard>
      </div>
    </div>
  )
}
