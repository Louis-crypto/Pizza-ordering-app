
function totalPrice (){
  var price = 0;
  var selectedSize = document.getElementById('sizes')
  var AmountOfSize = selectedSize.options[selectedSize.selectedIndex].value;
  var QuantityOfPizza = document.getElementById('numberOfPizzas').value;
  price = parseInt(QuantityOfPizza) * parseInt(AmountOfSize);
  // return (isNaN(price)) ? 0 : price;
  alert(price);
};
