(function() {

	angular.module('basketball').controller('ScheduleGameController',['$scope','$modal',function($scope,$modal){

		$scope.open = function(){
		
			var modalInstance = $modal.open({
				templateUrl: 'public/js/Angular/templates/modal-form/addNewTeam.html',
				controller: 'ModalScheduleController',
				backdrop: 'static',
				scope: $scope,
			});
  	};
}]);