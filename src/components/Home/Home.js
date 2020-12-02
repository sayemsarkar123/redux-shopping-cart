import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';

const Home = ({ store }) => {
  console.log(store);
  return (
    <div className="container">
      <div className="row">
        {
          store.map(product => <Product key={product.id} product={product}/>)
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ store }) => ({
  store
});

export default connect(mapStateToProps, null)(Home);