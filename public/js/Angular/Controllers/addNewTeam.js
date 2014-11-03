(function() {

	angular.module('basketball').controller('NewTeamController',['$scope','$modal',function($scope,$modal){

		$scope.open = function(size){
		
			var modalInstance = $modal.open({
				templateUrl: 'public/js/Angular/templates/modal-form/addNewTeam.html',
				controller: 'ModalAddTeamController',
				keyboard: true,
				backdrop: 'static',
				size: size
			});
  	};
}]);
// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('basketball').controller('ModalAddTeamController',['$scope','$modalInstance','AddTeamFactory',function($scope,$modalInstance,AddTeamFactory){
		
	
	$scope.newTeamName = $scope.teamName;
		$scope.addTeam = function(teamName){
		return AddTeamFactory.newTeam(teamName).then(function(data){
			$scope.data = data;
			return $scope.data;
		});	
	}			
		
		$scope.submit = function(){
    	$modalInstance.close($scope.addTeam($scope.newTeamName));
  	};

 	 	$scope.cancel = function() {
    	$modalInstance.dismiss('cancel');
  	};

}]);

})();