var express = require('express');
import SearchRecipesService from '../services/SearchRecipesService';

var router = express.Router();

// starring recipe - PATCH /recipes/X/star

var names = ["Foo", "Bar", "Baz", "Daz"];
var data = Array.apply(
  null,
  {length: 100}
).map(Number.call, Number).map(function(i){
  var randomName = names[i % names.length];
  var idx = i + 1; // count from 1
  return {
    id: idx,
    name: randomName + ' #' + idx,
    description: randomName + ' #' + idx,
    image: "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png",
    isStarred: false
  };
});

router.get('/recipes/:recipeId/star', function(req, res) {
  setTimeout(function() {
    var id = parseInt(req.params["recipeId"]);
    if(id % 2 == 0) {
      data[id].isStarred = !data[id].isStarred;
      res.sendStatus(200);
    } else {
      res.sendStatus(409);
    }
  }, 1000);
});

// getting recipes - GET /recipes?offset=X&count=Y&q=foo,bar,baz


var searchService = new SearchRecipesService();

router.get('/recipes', function(req, res) {
  setTimeout(function() {
    console.log('Query params' + req.query);

    const start = parseInt(req.query.offset) || 0;
    const end = parseInt(req.query.limit) || 10;
    
    var dataToSlice = searchService.filterRecipes(req.query.q, data.slice());
    res.json(dataToSlice.splice(start,end));
  }, 3000);
});

module.exports = router;
