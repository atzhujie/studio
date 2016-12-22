angular.module("index", [])
	.controller("index", function($scope, $http) {
		$http.post("data/index.json").success(function(data) {
			$scope.ss = data.rw;
			$scope.xx = data.zx;
			$scope.fj = data.fj;
			$scope.js = data.js
		});
	})