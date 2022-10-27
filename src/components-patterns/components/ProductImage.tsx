import { useContext } from 'react';
import noImage from '../../assets/no-image.jpg';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css'
import { ProductImageProps } from '../interfaces/interfaces';

export const ProductImage = ({ img = '', className, style }: ProductImageProps) => {
    const { product } = useContext(ProductContext);

    let imgToShow: string = getImage(img, getImage(product.img!!, noImage));

    return (
        <img className={`${styles.productImg} ${className}`}
        style={style} 
        src={imgToShow} alt='Product img' />
    )
}

const getImage = (img: string, fallback: string): string => img ? img : fallback;
