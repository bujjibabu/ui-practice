function TableCtrl ($scope, $http) {

	$http({
	  method: 'GET',
	  url: 'table.json'
	}).then(function successCallback(response) {
		debugger;
	    console.log("table Data::", response.data);
	    $scope.tableData = response.data; 
	  }, function errorCallback(response) {
	  	console.log('Error::', response);
	});

}