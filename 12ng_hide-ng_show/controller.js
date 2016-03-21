angular.module("MyFirstApp",[])
	.controller("FirstController",function($scope,$http){
		$scope.posts = [];
		$scope.loading = true;
		$http.get("http://jsonplaceholder.typicode.com/poss")
			.success(function(data) {
				console.log(data);
				$scope.posts = data;
				$scope.loading = false;
			})
			.error(function(err) {
				console.log("error");
				$scope.loading = false;
			});
	});
