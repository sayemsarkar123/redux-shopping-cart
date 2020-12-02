import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../redux/actions/cartAction';

const CartProduct = ({ product: { id, name, price, image, quantity }, deleteFromCart}) => {
  return (
    <div className="col-md-12 my-2">
      <div className="row align-items-center">
        <div className="col-md-2">
          <div>
            <img className="img-fluid" src={image} alt="" />
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <h6 className="text-secondary">{name}</h6>
            <h6 className="font-weight-bold text-secondary">&#8377; {price}</h6>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-right">
            <h6 className="text-secondary">{quantity} No{quantity > 1 ? 's' : ''}.</h6>
            <h6 className="font-weight-bold">&#8377; {price * quantity}</h6>
          </div>
        </div>
        <div className="col-md-2">
          <div className="text-center">
            <button onClick={() => deleteFromCart({ id })} className="border-0">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteFromCart: (payload) => dispatch(deleteFromCart(payload))
})

export default connect(null, mapDispatchToProps)(CartProduct);
