function createRestaurant(restName) {
  return {
  name: (restName),
  menus: {
    breakfast: [],
    lunch: [],
    dinner: [],
  }
 }
};

// Created a function and gave it a name createRestaurant. The test said
// that it should be able to have a different name, menus, type of menus
// which, to me, meant that this test is asking for an object to be Created
// in order for these values to pass through and add the appropriate values.




function addMenuItem(restName, menuItem) {
  if (restName.menus[menuItem.type].includes(menuItem) === false) {
    return (restName.menus[menuItem.type].push(menuItem));
  }
}

// Created a function with the name addMenuItem w/ 2 parameters to pass
// through to call out the restName and menuItem, because the test is
// asking to add a menuItem in the restName's menu.
// The if statement says that within the restarants menu, if the menuItem.type
// doesn't include the menuItem (=== false), the return will push the
// menuItem value to the restarants menu.




function removeMenuItem(restName, menuItem, menuType) {
 for (var i = 0; i < restName.menus[menuType].length; i++) {
   if (menuItem === restName.menus[menuType][i].name) {
    restName.menus[menuType].splice(i, 1);
    return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
   }
  } return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
}

// Created a function w/ 3 parameters calling out the restName, menuItem, and
// menuType.
// The for loop iterates through the restName's menus menuType length.
// The conditional says that if the menuItem stricktly equals the restName's
// menu menuType's name, then it will be spliced out of the menu and return
// the given string statement, which I interpolated w/ the appropriate menuItem
// and menuType.
// I didn't add an else statement since the computer doesn't know what it is
// looking for, and this would break the code.
// Added a second return statement outside of the conditional statement in
// order to return the other string value if the condition returns false.




module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
