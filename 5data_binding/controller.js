angular.module("MyFirstApp",[])
	.controller("FirstController",function($scope){
		$scope.nombre = "PatoMalo";
		$scope.nuevoComentario = {};
		$scope.comentarios = [
			{
				comentario: "Buen tip",
				username: "alpattycruz"
			},
			{
				comentario: "pesimo, q trucho esto",
				username: "pedro Llokalla"
			}
		];
		$scope.agregarComentario = function(){
			$scope.comentarios.push($scope.nuevoComentario);
			$scope.nuevoComentario = {};
		}
	});
