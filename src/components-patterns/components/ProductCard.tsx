import React, { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';


export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

const { Provider: ProductProvider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: ProductCardProps) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <ProductProvider value={{
      counter,
      increaseBy,
      product,
      maxCount
    }}>
      <div className={`${styles.productCard} ${className}`}
        style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </ProductProvider>
  )
}
