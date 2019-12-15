// var size = function run() {
//   document.getElementById("total").value = document.getElementById("sizes").value;
// };

var sizePrice = document.getElementById("sizes").value;
var crustPrice = document.getElementById("crusts").value;
var toppingsPrice = document.getElementById("toppings").value;
var pizzasOrdered = document.getElementById("numberOfPizzas").value;

var totalPrice = sizePrice + crustPrice + toppingsPrice * pizzasOrdered
