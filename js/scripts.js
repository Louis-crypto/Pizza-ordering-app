function totalPrice (){
  var price = 0;
  var selectedSize = document.getElementById("sizes")
  var CostOfSize = selectedSize.options[selectedSize.selectedIndex].value;
  var selectedCrust = document.getElementById("crusts")
  var CostOfCrust = selectedCrust.options[selectedCrust.selectedIndex].value;
  var selectedTopping = document.getElementById("toppings")
  var CostOfToppings = selectedTopping.options[selectedCrust.selectedIndex].value;
  var QuantityOfPizza = document.getElementById("numberOfPizzas").value;
  price = parseInt(CostOfSize) + parseInt(CostOfCrust) + parseInt(CostOfToppings)
  totalPrice = price * parseInt(QuantityOfPizza);
  document.getElementById("total").value=totalPrice;
  event.preventDefault();
};

// $("#prodIcon").on("click", function () {
//   $("#product").show();
//   $("#prodIcon").hide();
// });

$(document).ready (function(){

$("#order").on("click", function(){
  $("#menu").fadeIn(1000);
})

});
