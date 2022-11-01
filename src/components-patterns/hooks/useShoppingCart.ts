import { useState } from "react";
import { products } from "../data/products";
import { onChangeArgs, ProductInCart, ShoppingCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [cart, setCart] = useState<ShoppingCart>({});

  const onProductCountChange = ({ product, count }: onChangeArgs) => {
    setCart(oldShoppingCart => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};
      
      // Adding a new product to shopping when there is more than 0.
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      }

      // Removing a product from shopping cart.
      const {[product.id]: toDelete, ...rest} = oldShoppingCart;
      return rest;
    });
  }

  return { cart, onProductCountChange, products }
}