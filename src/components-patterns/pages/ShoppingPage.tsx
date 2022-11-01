import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { cart, onProductCountChange, products } = useShoppingCart();

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
