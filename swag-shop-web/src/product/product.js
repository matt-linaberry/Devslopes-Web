import React, {Component} from 'react';
import './product.css';

class Product extends Component {
  render() {
    // you want to show stuff on the screen in React.
    return (
      // always make sure you got an outer container!
      <div className="card product">
        <img className="card-img-top" alt="Product" src={this.props.imgUrl}></img>
        <div className="card-block">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">Price: ${this.props.price}</p>
          <a href="#" className="btn btn-primary">Add to Wishlist</a>
        </div>
      </div>
    );
  }
}

export default Product;
