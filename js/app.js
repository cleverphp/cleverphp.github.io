var app = angular.module("cleverphp",['ngSanitize','hljs']);

app.controller("main",function($scope,$http){

		$scope.nav = ['PHP','JS','HTML5','CSS','MYSQL','REDIS'];

		$scope.navClass = [1,0,0,0,0,0];

		$scope.content = '';

		$scope.curNav = "php";

		$scope.showPageOrNot = false;

		$scope.showNav = function(k){

			//切换视图1.0
			for(var i=0;i<$scope.navClass.length;i++){

				if(i != k){
					$scope.navClass[i] = 0;
				}else{
					$scope.navClass[i] = 1;
				}

			}
			//切换视图1.1
			$scope.pageStart(k);

		}

		$scope.showArticle = function(key){


			var f = "/data/"+$scope.curNav+"/"+$scope.leftLi[key].file;

			showFile(f);


		}

		$scope.iniMap = function(num){

			initMap(num);

		}

		$scope.leftLi = [];

		$scope.pageStart = function(){

			var type = arguments[0];

			$scope.iniMap(type);


		}

		$scope.pageStart(0);


});

function cloneObject(obj){

	var res = {};

	for(var key in obj){

		res[key] = obj[key];

	}

	return res;

}

function initMap(num){

	$.ajax({
		url : "/map/map.json",
		type : 'get',
		dataType : 'json'
	}).done().always(function(data){

			var map = data;

			var scope = angular.element(document.body).scope();

			var listLeft = function(key){

				scope.$apply(function(){

						scope.curNav = key;

						scope.leftLi = cloneObject(map.nav[key]);

						if(Object.keys(scope.leftLi).length === 0){

							scope.showPageOrNot = true;
							return;
						}else{

							scope.showPageOrNot = false;
							scope.showArticle(0);
						}
						

				});

			}

			switch(num){

				case 0:
					listLeft('php');
					break;
				case 1:
					listLeft('js');
					break;
				case 2:
					listLeft('html5');
					break;
				case 3:
					listLeft('css');
					break;
				case 4:
					listLeft('mysql');
					break;
				case 5:
					listLeft('redis');
					break;
				default:
					break;

			}
	
	});

}

function showFile(f){

	$.ajax(f).done().always(function(data){


		var scope = angular.element(document.body).scope();

		scope.$apply(function(){

			scope.content = data;

		});

	});

}






