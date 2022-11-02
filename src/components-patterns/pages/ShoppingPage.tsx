import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div>
        <ProductCard
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10
          }}
          className='bg-dark text-white'>
            {
              () => (
                <>
                  <ProductImage img={product.img} className='custom-image' style={{boxShadow: '10px 10px 10px rgba(15, 15, 15, .5)'}} />
                  <ProductTitle className='text-bold' />
                  <ProductButtons className='custom-buttons' />
                </>
              )
            }
        </ProductCard>
      </div>
    </div>
  )
}
