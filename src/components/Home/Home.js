import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';

const Home = ({ store, filterProducts, text }) => {
  const [products, setProducts] = useState(store);
  useEffect(() => {
    setProducts(text ? filterProducts : store)
  }, [text]);
  return (
    <div className="container">
      <div className="row">
        {
          products.map(product => <Product key={product.id} product={product}/>)
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ store, filterProducts, text }) => ({
  store,
  filterProducts,
  text
});

export default connect(mapStateToProps, null)(Home);