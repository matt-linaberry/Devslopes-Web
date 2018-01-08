import React, {Component} from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {
  render() {
    // you want to show stuff on the screen in React.
    return (
      // always make sure you got an outer container!
      <li className="list-group-item pc-condensed">
        <a className="btn btn-outline-danger">X</a>
        <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
      </li>
    );
  }
}

export default ProductCondensed;
