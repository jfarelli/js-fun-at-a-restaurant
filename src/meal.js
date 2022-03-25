function nameMenuItem(string) {
  return `Delicious ${string}`;
}



function createMenuItem(itemName, itemPrice, itemType) {
    return {
      name: itemName,
      price: itemPrice,
      type: itemType,
    }
}



function addIngredients(string, ingredients) {
  if (ingredients.includes(string)) {
    return ingredients;
  } else {
    ingredients.push(string);
  }
}



function formatPrice(price) {
  return `$${price}`;
}



function decreasePrice(price) {
  return price * 0.90
}



function createRecipe(itemTitle, itemIngredients, itemType) {
  return {
    title: itemTitle,
    ingredients: itemIngredients,
    type: itemType,
  }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
