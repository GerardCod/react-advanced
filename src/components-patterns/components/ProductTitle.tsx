import React, { useContext } from 'react';
import { ProductTitleProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard';

export const ProductTitle = ({ title, className, style }: ProductTitleProps) => {
    const { product } = useContext(ProductContext);

    let titleToShow = title ? title : product.title;

    return (
        <span 
            className={`${styles.productDescription} ${className}`}
            style={style}
        >{titleToShow}</span>
    )
}