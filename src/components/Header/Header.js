import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="container py-3">
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
              <div className="col-md-10">
                <input className="form-control border border-success" placeholder="Search for Vegetables and Fruits" type="text"/>
              </div>
              <div className="col-md-2">
                <button className="btn btn-block btn-success"><FontAwesomeIcon icon={faSearch} /></button>
              </div>
            </div>
          </form>
          </div>
        </div>
        <div className="col-md-4 ml-auto">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-right">
              <p className="m-0 text-success">No. of items &nbsp;:&nbsp; <span className="font-weight-bold">0</span></p>
              <p className="m-0 text-success">Sub Total	&nbsp;:&nbsp; <span className="font-weight-bold">0</span></p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <span style={{fontSize: '2rem'}} className="text-success"><FontAwesomeIcon icon={faShoppingCart} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;