import React, { useState } from 'react';
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import { onChangeArgs, Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product: Product = {
  id: '1234324',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

const product2: Product = {
  id: '92834',
  title: 'Coffe Mug - Meme',
  img: './coffee-mug2.png'
}

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

interface ShoppingCart {
  [key: string]: ProductInCart;
}

export const ShoppingPage = () => {
  const [cart, setCart] = useState<ShoppingCart>({});

  const onProductCountChange = ({ product, count }: onChangeArgs) => {
    console.log('Product count has changed ', product, count);
  }

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {
          products.map(product => (
            <ProductCard 
              product={product} 
              className='bg-dark text-white'
              onChange={ onProductCountChange }
              key={`product-${product.id}`}>
              <ProductImage img={product.img} className='custom-image' />
              <ProductTitle className='text-bold'/>
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }
      </div>

      <div className='shopping-cart'>
            <ProductCard 
              product={product} 
              className='bg-dark text-white'
              key={`product-${product.id}`}
              style={{
                width: '100px'
              }}>
              <ProductImage img={product.img} className='custom-image' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
            <ProductCard 
              product={product2} 
              className='bg-dark text-white'
              key={`product-${product2.id}`}
              style={{
                width: '100px'
              }}>
              <ProductImage img={product2.img} className='custom-image' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
      </div>
    </div>
  )
}
