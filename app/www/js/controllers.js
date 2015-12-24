angular.module('app.controllers', [])
  
.controller('buyerCtrl', function($scope) {

})
   
.controller('sellerCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('homeCtrl', function($scope, $state, formData) {
	$scope.product = {};

	$scope.submitForm = function(product) {
		if (product.name) {
			formData.updateForm(angular.copy(product));
			$scope.product = {};
			$state.go('menu.myOrders');
		} else {
			alert("Please enter product name");
		}
	};
})
   
.controller('myOrdersCtrl', function($scope, formData) {
	$scope.products = formData.getForm();
})
