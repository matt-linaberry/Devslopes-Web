var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
  {
    "id":"23452",
    "text":"eggs"
  },
  {
    "id":"27589",
    "text":"milk"
  },
  {
    "id":"ierur389",
    "text":"bacon"
  },
  {
    "id":"378234vn",
    "text":"frog legs"
  }
];


// the fetch!
app.get('/ingredients', function(req, res) {
  res.send(ingredients);
});

// The add!
app.post('/ingredients', function(req, res) {
  var ingredient = req.body;
  if (!ingredient || ingredient.text === "") {
    res.status(500).send({
      error: "Your ingreditent must have a text name."
    });
  }
  else {
    ingredients.push(ingredient);
    res.status(200).send(ingredients);
  }
});

// The update!
app.put('/ingredients/:ingredientId', function(req, res) {
  var ingredientId = req.params.ingredientId;
  var newText = req.body.text;

  if (!newText || newText === "") {
    res.status(500).send({error: "You must provide ingredient text."})
  } else {
    var objectFound = false;
    for (var x = 0; x < ingredients.length; x++) {
      var ing = ingredients[x];
      if (ing.id === req.params.ingredientId) {
        ingredients[x].text = newText;
        var objectFound = true;
        break;
      }
    }
    if (!objectFound) {
      res.status(500).send({error: "Your object was not found."})
    }
    else {
      res.send(ingredients);

    }
  }

});

app.listen(3000, function() {
  console.log("First API running on port 3000!!!");
});
