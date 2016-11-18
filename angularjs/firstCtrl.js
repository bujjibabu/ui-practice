	function signCtrl ($scope, $http) {
		//$scope.name = 'Welcome angular Controllers';
		//$scope.name = 'Admin';
		//get json
		//config.url
		//var scope = $scope;
		// $scope.name = 'Admin';
		// $scope.password = 'Demo';

		$http({
		  method: 'GET',
		  url: 'config.json'
		}).then(function successCallback(response) {
		    console.log(response.data);
		  }, function errorCallback(response) {
		  });

		//ajax 

		// $.ajax({
		// 	method:'GET',
		// 	url: 'config.json',
		// 	headers: {},
		// 	success: function(res) {
		// 		console.log(res);
		// 		result = res; // {name:'Admin',P};

		// 		result.name // admin
		// 	},
		// 	error: function(res){
		// 		console.log(res);
		// 	}
		// })

		// $.ajax({
		// 	method:'POST',
		// 	url: 'serverurl',
		// 	data: obj,
		// 	headers: {},
		// 	success: function(res) {
		// 		console.log(res);
		// 	},
		// 	error: function(res){
		// 		console.log(res);
		// 	}
		// })


		$scope.signIn = function () {
			$scope.signinObj = {
				name: $scope.name,
				pwd: $scope.password
			}
			console.log($scope.signinObj);
			$scope.name = '';
			$scope.password = '';
		};

		$scope.imageCheck = function () {
			// $scope.signIn1();
			// $scope.signIn2();
			// $scope.signIn3();
		};

		// var signIn = function() {

		// };

		// function signIn() {

		// }

	}