(function () {
	var app = angular.module('userModule', []);
 
	app.controller('userController', ['$scope', function ($scope) {
			$scope.user = {};
			$scope.showForm = false;
			this.showForm = function () {
				$scope.showForm = true;
			};
			this.save = function () {
                            var elemento = 'El usuario'+ $scope.user.firstName + ' ' + $scope.user.lastName + ' nació el ' + $scope.user.birthday;
                            document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a> "+ elemento +"</div>";;
			     //alert("Guardado: " + $scope.user.firstName + " " + $scope.user.lastName + " " + $scope.user.birthday);
			};
		}]);
 
	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
})();