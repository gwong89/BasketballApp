(function() {
	
angular.module('basketball').controller('ScheduleGameController',['$scope','$modal',function($scope,$modal){

		$scope.open = function(){
		
			var modalInstance = $modal.open({
				templateUrl: 'public/js/Angular/templates/modal-form/ScheduleGame.html',
				controller: 'ModalScheduleController',
				backdrop: 'static',
				scope: $scope,
			});
  	};


	}]);


angular.module('basketball').controller('ModalScheduleController',['$scope','$modalInstance','passingService','getTeamsFactory',function($scope,$modalInstance,passingService,getTeamsFactory){
			
  $scope.today = function() {
     $scope.dt = new Date();
   };
   $scope.today();
   $scope.clear = function () {
     $scope.dt = null;
   };

   $scope.open = function($event) {
     $event.preventDefault();
     $event.stopPropagation();

     $scope.opened = true;
   };

   $scope.dateOptions = {
     formatYear: 'yy',
     startingDay: 1
   };

   $scope.formats = ['yyyy-MM-dd'];
   $scope.format = $scope.formats[0];
					
	 $scope.mytime = new Date();
	   $scope.ismeridian = true;
	   $scope.update = function() {
	     var d = new Date();
	     d.setHours( 14 );
	     d.setMinutes( 0 );
	     $scope.mytime = d;
	   };

	   $scope.changed = function () {
	     console.log('Time changed to: ' + $scope.mytime);
	   };
		 
		 $scope.factoryResponse = getTeamsFactory.teams();
		 $scope.factoryResponse.then(function(response){
			 $scope.teamsList = response.data;
			 console.log($scope.teamsList);
		 });
		 

	   $scope.clear = function() {
	     $scope.mytime = null;
	   };	
			
		 $scope.cancel = function() {
		    $modalInstance.dismiss('cancel');
		 };
		 
		 
		 
		 $scope.submit = function(){
			 $modalInstance.close()
		 }
		 
		 
		 
		 
		}]);
	})()