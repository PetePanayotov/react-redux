import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id={17}
          title='Glasses'
          price={198}
          description='These are some nice glasses bro'
        />
        <ProductItem
          id={7}
          title='Bag'
          price={79}
          description='This is a nice bag m8!'
        />
        <ProductItem
          id={97}
          title='Bag'
          price={70}
          description='This is a nice bag m8!'
        />
      </ul>
    </section>
  );
};

export default Products;
