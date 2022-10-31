import React, { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';


export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

const { Provider: ProductProvider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({onChange, product});

  return (
    <ProductProvider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={ `${styles.productCard} ${className}`}
      style={style}>
        {children}
      </div>
    </ProductProvider>
  )
}
