function convertPrice(price) {
  const currentPrice = parseInt(price.replace("₫", "").replace(",", ""))
  return (currentPrice*100)/parseInt(randomPercentPrice());
}

function randomPercentPrice() {
  return Math.floor(Math.random() * 100);
}

var app = angular.module("angularApp", []);
app.controller("DetailController", function ($scope, $http, $sce) {
  const searchParams = new URLSearchParams(window.location.href);
  const id = searchParams.get("id");
  const rawCatName = searchParams.get("cat");
  const catName = rawCatName[0].toLocaleLowerCase() + rawCatName.slice(1);
  $http({
    method: "GET",
    url: "http://localhost:3000/" + catName + "?id=" + id,
  }).then(
    function mySucces(response) {
      $scope.detail = response.data[0];
      $scope.longDescription = $sce.trustAsHtml(response.data[0].long_description);

      $scope.percentPrice = randomPercentPrice();
      $scope.priceOriginal = Number((convertPrice(response.data[0].Giaban)).toFixed(1)).toLocaleString();
    },
    function myError(response) {
      $scope.dataError = response.statusText;
    }
  );

  $http({
    method: "GET",
    url: "http://localhost:3000/" + catName,
  }).then(
    function mySucces(response) {
      $scope.relations = response.data.slice(0,10);
    },
    function myError(response) {
      $scope.dataError = response.statusText;
    }
  );
});

function myError(response) {
  $scope.dataError = response.statusText;
}

function changeImage(event) {
  document.getElementById("main_img").src = event.src;
}
