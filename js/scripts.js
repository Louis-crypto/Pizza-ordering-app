
function totalPrice (){
  var price = 0;
  var selectedSize = document.getElementById("sizes")
  var CostOfSize = selectedSize.options[selectedSize.selectedIndex].value;
  var selectedCrust = document.getElementById("crusts")
  var CostOfCrust = selectedCrust.options[selectedCrust.selectedIndex].value;
  var selectedToppings = document.getElementById("toppings")
  var QuantityOfPizza = document.getElementById("numberOfPizzas").value;
  price = parseInt(CostOfSize) + parseInt(CostOfCrust) * parseInt(QuantityOfPizza);
  // return (isNaN(price)) ? 0 : price;
  alert(price);
};
