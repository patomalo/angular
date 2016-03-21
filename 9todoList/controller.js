angular.module("ToDoList",["LocalStorageModule"])
	.controller("ToDoController",function($scope,localStorageService){
		if(localStorageService.get("angular-todoList")){//the name "angular-todoList" puede ser cualquier nombre
			$scope.todo = localStorageService.get("angular-todoList");
		} else{
			$scope.todo = [];
		}
		
		/*
			{
				descripcion: 'Terminar el curso Angular',
				fencha: '3-03-15 2:00pm'
			}
		*/
		$scope.$watchCollection('todo',function(newValue,oldValue){
			localStorageService.set("angular-todoList",$scope.todo);
		});
		$scope.addActv = function(){
			$scope.todo.push($scope.newActv);
			$scope.newActv = {};
		}
		$scope.clean = function(){
			$scope.todo = [];
		}
	});