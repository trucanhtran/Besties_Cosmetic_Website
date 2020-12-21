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
  
  bicicosmetics.push({ title: title, image: image, price: price, description: description, count: count, id: id });
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