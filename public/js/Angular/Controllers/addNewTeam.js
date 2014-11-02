(function() {

	angular.module('basketball').controller('NewTeamController',['$scope','$modal',function($scope,$modal){

		$scope.open = function(size){
		
			var modalInstance = $modal.open({
				templateUrl: 'public/js/Angular/templates/modal-form/addNewTeam.html',
				controller: 'ModalAddTeamController',
				size: size
			});
  	};
}]);
// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('basketball').controller('ModalAddTeamController',['$scope','$modalInstance',function($scope,$modalInstance){
		

		$scope.submit = function(){
    	$modalInstance.close();
  	};

 	 	$scope.cancel = function() {
    	$modalInstance.dismiss('cancel');
  	};

}]);

})();