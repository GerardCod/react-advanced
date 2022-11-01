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
    setCart(oldShoppingCart => {

      if (count == 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count }
      }
    });
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
              onChange={onProductCountChange}
              value={cart[product.id]?.count || 0}
              key={`product-${product.id}`}>
              <ProductImage img={product.img} className='custom-image' />
              <ProductTitle className='text-bold' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }
      </div>

      <div className='shopping-cart'>
        {
          Object.entries(cart).map(([key, product]) => (
            <ProductCard
              product={product}
              className='bg-dark text-white'
              key={`productInCart-${key}`}
              style={{
                width: '100px'
              }}
              onChange={ onProductCountChange }
              value={product.count}>
              <ProductImage img={product.img} className='custom-image' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}
