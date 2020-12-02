import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import CartProduct from '../CartProduct/CartProduct';
import { searchProduct } from '../../redux/actions/cartAction';

const Header = ({ cart, searchProduct }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartStyle = { right: 0, top: 'calc(100% + 0.5rem)', height: '25rem', width: '25rem', zIndex: 999, overflowY: 'auto' };
  return (
    <section className="shadow-sm mb-3">
      <div className="container py-4">
      <div className="row align-items-center">
        <div className="col-md-2">
          <div>
          <img className="img-fluid" src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png" alt=""/>
          </div>
        </div>
        <div className="col-md-5 mx-auto">
          <div>
          <form>
            <div className="form-row">
              <div className="col-md-10 px-0">
                    <input onChange={(event) => searchProduct({ text: event.target.value })} className="form-control border border-success rounded-0" placeholder="Search for Vegetables and Fruits" type="text"/>
              </div>
              <div className="col-md-2 px-0">
                <button className="btn btn-block btn-success rounded-0"><FontAwesomeIcon icon={faSearch} /></button>
              </div>
            </div>
          </form>
          </div>
        </div>
        <div className="col-md-4 ml-auto">
          <div className="row align-items-center">
            <div className="col-md-6 ml-auto">
              <div className="text-right">
                <p className="m-0 text-success">No. of items &nbsp;:&nbsp; <span className="font-weight-bold">{cart.length}</span></p>
                <p className="m-0 text-success">Sub Total &nbsp;:&nbsp; <span className="font-weight-bold">{
                  cart.reduce((total, {price, quantity}) => (total + (price * quantity)), 0)
                }</span></p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="position-relative">
                <button onClick={() => setIsCartOpen(prevState => !prevState)} style={{ fontSize: '2rem', outline: 0 }} className="text-success border-0 bg-white"><FontAwesomeIcon icon={faShoppingCart} /></button>
                {
                  isCartOpen && <div style={cartStyle} className="position-absolute bg-white border border-silver">
                  <div className="row mx-0">
                    {
                      cart.map(product => <CartProduct key={product.id} product={product}/>)
                    }
                  </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = (dispatch) => ({
  searchProduct: (payload) => dispatch(searchProduct(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);