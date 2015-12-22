angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('formData', [function(){
	return {
		form: {},
		getForm: function() {
			return this.form;
		},
		updateForm: function(form) {
			this.form = form;
		}
	}
}]);
