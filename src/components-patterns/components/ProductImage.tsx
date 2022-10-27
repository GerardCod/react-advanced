import { useContext } from 'react';
import noImage from '../../assets/no-image.jpg';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css'

export const ProductImage = ({ img = '' }) => {
    const { product } = useContext(ProductContext);

    let imgToShow: string = getImage(img, getImage(product.img!!, noImage));

    return (
        <img className={styles.productImg} src={imgToShow} alt='Product img' />
    )
}

const getImage = (img: string, fallback: string): string => img ? img : fallback;
