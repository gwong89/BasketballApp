(function() {

	angular.module('basketball').controller('NewTeamController',['$scope','$modal',function($scope,$modal){

		$scope.open = function(){
		
			var modalInstance = $modal.open({
				templateUrl: 'public/js/Angular/templates/modal-form/addNewTeam.html',
				controller: 'ModalAddTeamController',
				backdrop: 'static',
				windowClass:'modalTeam',
				scope: $scope,
			});
  	};
}]);
// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('basketball').controller('ModalAddTeamController',['$scope','$modalInstance','AddTeamFactory','passingService',function($scope,$modalInstance,AddTeamFactory,passingService){
		
	
	
		$scope.addTeam = function(teamName){
		return AddTeamFactory.newTeam(teamName).then(function(data){
			$scope.data = data;
			return $scope.data;
		});	
	}			
		
	$scope.name = passingService.passTable();
	console.log($scope.name);
	
		
		$scope.submit = function(){
			$scope.newTeam = {};
			$scope.newTeam.Name = $scope.teamName;
			$scope.newTeam.Wins = 0;
			$scope.newTeam.Losess = 0;
			$scope.name.push($scope.newTeam);
    	$modalInstance.close($scope.addTeam($scope.teamName));
  	};

 	 	$scope.cancel = function() {
    	$modalInstance.dismiss('cancel');
  	};

}]);

})();