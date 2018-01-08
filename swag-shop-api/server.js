var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');

var Product = require('./model/product');
var WishList = require('./model/wishlist');
var Cart = require('./model/cart');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.post('/product', function (req, res) {
  var product = new Product();
  product.title = req.body.title;
  product.price = req.body.price;
  product.save(function(err, savedProduct) {
    if (err) {
      res.status(500).send({error: "Could not save product."});
    } else {
      res.send(savedProduct);
    }
  });
});

app.get('/product', function (req, res) {
  Product.find({}, function (err, products) {
    if (err) {
      res.status(500).send({error: "Could not retrieve products."});
    } else {
      res.send(products);
    }
  })
});

app.get('/wishlist', function (req, res) {
  WishList.find({}).populate({path: 'products', model: 'Product'}).exec(function(err, wishLists) {
    if (err) {
      res.status(500).send({err: "Could not fetch wishlists"});
    } else {
      res.status(200).send(wishLists);
    }
  });
})

app.post('/wishlist', function (req, res) {
  var wishList = new WishList();
  wishList.title = req.body.title;

  wishList.save(function(err, savedWishlist) {
    if (err) {
      res.status(500).send({err: "Could not create wishlist."});
    } else {
      res.send(savedWishlist);
    }
  })
});

app.put('/wishlist/product/add', function (req, res) {
  Product.findOne({_id: req.body.productId}, function(err, product) {
    if (err) {
      res.status(500).send({err: "Could not add to wish list."});
    } else {
      WishList.update({_id: req.body.wishListId}, {$addToSet: {products: product._id}}, function (err, wishList) {
        if (err) {
          res.status(500).send({err: "Could not add to wish list."});
        } else{
          res.send(wishList);
        }
      })
    }
  })
});


app.listen(3004, function() {
  console.log("SWAG SHOP API RUNNING ON PORT 3000...");
});
