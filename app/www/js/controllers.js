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
			console.log("Submitting Form", product);
			formData.updateForm(product);
			console.log("Retrieving form from service", formData.getForm());
			$state.go('menu.myOrders');
		} else {
			alert("Please fill out some information for the user");
		}
	};
})
   
.controller('myOrdersCtrl', function($scope, formData) {
	$scope.product = formData.getForm();
})
