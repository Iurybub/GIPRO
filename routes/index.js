var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', indexController.getAboutPage)
router.get('/products', indexController.getProductPage)
router.get('/recipes', indexController.getRecipesPage)
router.get('/recipes/:key', indexController.getRecipeDetailsPage)

module.exports = router;
