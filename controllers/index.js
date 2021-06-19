exports.getAboutPage = (req, res, next) => {
    res.render('about',
        { title: 'О нас' });
  };
exports.getProductPage = (req, res, next) => {
    res.render('product',
        { title: 'Товар' });
  };
exports.getRecipesPage = (req, res, next) => {
    res.render('recipe',
        { title: 'Рецепты' });
  };
exports.getRecipeDetailsPage = (req, res, next) => {
    res.render('recipe-details',
        { title: 'Дитали' });
  };