angular.module("MyFirstApp",[])
	.controller("FirstController",["$scope","$http",function(m,h){
		m.nombre = "PatoMalo";
		m.nuevoComentario = {};
		m.comentarios = [
			{
				comentario: "Buen tip",
				username: "alpattycruz"
			},
			{
				comentario: "pesimo, q trucho esto",
				username: "pedro Llokalla"
			}
		];
		m.agregarComentario = function(){
			m.comentarios.push(m.nuevoComentario);
			m.nuevoComentario = {};
		}
	}]);
