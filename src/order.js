function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length >= 3) {
    return deliveryOrders;
  } else {
    deliveryOrders.push(order)
  }
}
// Created a function w/ 2 parameters, and then wrote a
// conditional statement that, if true, returns the
// argument and returns an order type list. If false, then then
// conditional pushes (adds) another order to the order type list.



function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
}

// Created a function w/ 2 parameters. Created for loop to
// run through the length of the deliveryOrders. After that
// created an if statement in order to look through the
// deliveryOrders at index "i" w/ dot notation for the orderNumber
// and set that strictly equal to the orderNumber. The result
// will remove the deliveryOrders with the splice() function at
// index "i", and remove 1 deliveryOrders.



function listItems(deliveryOrders) {
  var foodItems = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    foodItems.push(deliveryOrders[i].item);
  } return foodItems.join(', ');
}
// Created a function w/ 1 parameter. Initiated a new variable
// with closed brackets, in order to pass the items into.
// The for loop runs through each order and pushes the item
// from that order into the new array, and then returns the
// new array by joining the items in that new array.



function searchOrder(deliveryOrders, menuItem) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === menuItem) {
    return true;
  }
  }
    return false;
};

// Created a function w/ 1 parameter. Wrote a for loop to move
// through each object. The if statement says that if the deliveryOrders
// item at index "i" strickly equals the menuItem, then it will return
// true. The else statement is taken off, so the function doesn't stop
// at the first return statement, and can proceed to determine the
// second return statement.






module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
