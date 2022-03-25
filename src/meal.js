function nameMenuItem(string) {
  return `Delicious ${string}`;
}
// Created a function and setup the interpolation
// of ${string} after the return statement in order
// to pass other stings through to create "Delicious" strings.


function createMenuItem(itemName, itemPrice, itemType) {
  return {
    name: itemName,
    price: itemPrice,
    type: itemType,
  }
}
// Created a function with 3 parameters and set those as arguments
// within the object in order to return the appropriate info.



function addIngredients(string, ingredients) {
  if (ingredients.includes(string)) {
    return ingredients;
  } else {
    ingredients.push(string);
  }
}
// Created a function w/ 2 parameters, then setup a conditional
// statement that detects if certain ingredients include (true) a
// certain string, the conditional will return the ingredients. If false the
// the conditional will then add the ingredients (push).


function formatPrice(price) {
  return `$${price}`;
}
// Created a function with 1 parameter and added a
// single return statement, interpolating `$${price};`
// so that the statement adds a dollar sign in front
// of the price.


function decreasePrice(price) {
  return price * 0.90
}
// Created a function with 1 parameter, then created a return
// statement using that as an argument. The test called for the
// price to be decreased by 10%, so multiplying the price by
// 0.90 will give me that value.


function createRecipe(itemTitle, itemIngredients, itemType) {
  return {
    title: itemTitle,
    ingredients: itemIngredients,
    type: itemType,
  }
}
// Created a function with 3 parameters then passed those as
// arguments after each key in the object, so the function will
// return a recipe object when invoked. 

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
