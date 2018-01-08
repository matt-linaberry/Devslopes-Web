import React, {Component} from 'react';
import './wishlist.css';
import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends Component {
  constructor(props) {
    super(props);

    this.state = {wishList:[
      {
        title:"Bologna Killer",
        price: 23.99,
        _id:"harjfwfg"
      },
      {
        title:"Foo man chu",
        price: 4.99,
        _id:"fdgderg"
      },
      {
        title:"Pipe Dream",
        price: 100.99,
        _id:"harjfdgdffffffwfg"
      }
    ]}
    // bind stuff
    this.createWishList = this.createWishList.bind(this);

  }
  createWishList = () => {
    const list = this.state.wishList.map((product) =>
      <ProductCondensed product={product} key={product._id} />
  );
  return (list);
  }
  render() {
    // you want to show stuff on the screen in React.
    return (
      // always make sure you got an outer container!
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Wish List</h4>
          <ul className="list-group">
            {this.createWishList()}
          </ul>
        </div>
      </div>
    );
  }
}

export default WishList;
