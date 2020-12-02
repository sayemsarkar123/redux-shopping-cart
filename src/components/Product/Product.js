import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';

const Product = ({ product: { id, image, name, price }, addToCart }) => {
  const [count, setCount] = useState(1);
  const btnStyle = { outline: 0, width: '2rem', height: '2rem' };
  return (
    <div key={id} className="col-md-3 my-3">
      <div className="shadow-sm px-3 pb-3">
        <div className="text-center">
          <img className="img-fluid" src={image} alt="" />
          <h6>{name}</h6>
          <h4 className="my-3 text-secondary font-weight-bold">
            &#8377; {price}
          </h4>
          <div className="my-3">
            <div className="row align-items-center">
              <div className="col-md-3 ml-auto">
              <button onClick={() => setCount(prevCount => prevCount ? prevCount - 1 : prevCount)} style={btnStyle} className="rounded-circle border-0 text-success"><FontAwesomeIcon icon={faMinus} /></button>
              </div>
              <div className="col-md-4">
                <p className="p-1 border border-silver font-weight-bold text-secondary m-0">{count}</p>
              </div>
              <div className="col-md-3 mr-auto">
                <button onClick={() => setCount(prevCount => prevCount + 1)} style={btnStyle} className="rounded-circle border-0 text-success"><FontAwesomeIcon icon={faPlus} /></button>
              </div>
            </div>
          </div>
          <button onClick={() => addToCart({id, quantity: count})} className="btn btn-block btn-success rounded-0">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (payload) => dispatch(addToCart(payload))
});

export default connect(null, mapDispatchToProps)(Product);
