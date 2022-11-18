import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'
import { ProductButtonsProps } from "../interfaces/interfaces";

export const ProductButtons = ({className, style}: ProductButtonsProps) => {
    const { counter, increaseBy, maxCount } = useContext(ProductContext);

    const isMaxCountReached = useCallback(() => {
      return !!maxCount && counter === maxCount;
    }, [counter, maxCount]);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={`${styles.buttonAdd} ${isMaxCountReached() && styles.disabled}`} disabled={isMaxCountReached()} onClick={() => increaseBy(1)}>+</button>
        </div>
    );
}