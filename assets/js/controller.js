var newApp = angular.module('newApp', ['ngRoute']);

newApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
	templateUrl: '',
	controller: 'Rout1Ctrl'
	})
	.when('/:id', {
	templateUrl: '',
	controller: 'Rout2Ctrl'
	})
}]);

newApp.controller('Rout1Ctrl', function ($scope,$http,$routeParams) {
});

newApp.controller('Rout1Ctrl', function ($scope,$http,$routeParams) {
	$scope.id = $routeParams.id;
});