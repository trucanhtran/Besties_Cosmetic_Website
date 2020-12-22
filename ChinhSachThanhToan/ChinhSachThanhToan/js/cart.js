function addToCart() {
  var bicicosmetics = [];
  var storedNames = JSON.parse(localStorage.getItem("bicicosmetics"));
  
  if (storedNames !== null) {
    bicicosmetics = [...storedNames]
  } 

  const title = document.getElementById("id_product_name").textContent.trim();
  const image = document.getElementById("main_img").src;
  const price = document.getElementById("id_product_price").textContent.trim();
  const description = document.getElementById("id_product_description").textContent.trim();
  const count = parseInt(document.getElementById("id_product_length").value);
  const id = document.getElementById("id_product_id").textContent.trim();
  const total = parseInt(count) * parseInt(price.replace(",","").replace("₫", ""));
  
  bicicosmetics.push({ title: title, image: image, price: price, description: description, count: count, id: id, total: total });
  localStorage.setItem("bicicosmetics", JSON.stringify(bicicosmetics));
}

function getTotalCart() {
  const storedNames = JSON.parse(localStorage.getItem("bicicosmetics"));
  return storedNames !== null ? storedNames.length : 0
}

$(function() {
  $("#id_cart_number").text(getTotalCart())


});

function goBack() {
  window.history.back();
}

var appCart = angular.module("cartApp", []);
appCart.controller("CartController", function ($scope) {
  const storedNames = JSON.parse(localStorage.getItem("bicicosmetics"));
  const datas = storedNames !== null ? [...storedNames] : 0
  $scope.carts = datas;

  totalTempPrice($scope, datas);
  totalPrice($scope, datas);

  $scope.removeCartItem = function(id) { 
    const storedNames = JSON.parse(localStorage.getItem("bicicosmetics"));
    const newStoredNames = storedNames.filter(function(item) {
      if(item.id !== id) return item;
    });
    localStorage.setItem("bicicosmetics", JSON.stringify(newStoredNames));
    $scope.carts = newStoredNames;

    totalTempPrice($scope, newStoredNames);
    totalPrice($scope, newStoredNames);
  }

  $scope.calCurrencyTotal = function(priceTotal, id) {  
    const storedNames = JSON.parse(localStorage.getItem("bicicosmetics"));
    const datas = storedNames !== null ? [...storedNames] : 0
    const newStored = datas.map(function(item) {
      return {
        ...item,
        count: item.id === id ? priceTotal : item.count,
        total: item.id === id ? parseInt(priceTotal) * parseInt(item.price.replace(",","").replace("₫", "")) : item.total
      }
    })
    localStorage.setItem("bicicosmetics", JSON.stringify(newStored));
    $scope.carts = newStored;
    totalTempPrice($scope, newStored);
    totalPrice($scope, newStored);
  };
});

function totalTempPrice(scope, datas) {
  if (datas.length === 0) return 0;
  scope.totalTempPrice = datas.map(function(item) {return item.total}).reduce((a, b) => a + b, 0)
}

function totalPrice(scope, datas) {
  if (datas.length === 0) return 0;
  scope.totalPrice = datas.map(function(item) {return item.total}).reduce((a, b) => a + b, 0)
}