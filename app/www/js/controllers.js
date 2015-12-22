angular.module('app.controllers', [])
  
.controller('buyerCtrl', function($scope) {

})
   
.controller('sellerCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('homeCtrl', function($scope) {
	$scope.data = {};
	$scope.productSearch = "";
	$scope.productList = [];
	  
	$scope.saveProductSearch = function() {
		if ($scope.data.product)
	    {
	      $scope.productSearch = $scope.data.product;
	      $scope.productList.push({
	      	first: $scope.productSearch
	      });
	    } 
	    else 
	    {
	      alert("Please fill out the field before submitting!");
	    }
	}
})
   
.controller('myOrdersCtrl', function($scope) {

})
