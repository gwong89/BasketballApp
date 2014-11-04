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


angular.module('basketball').controller('ModalScheduleController',['$scope','$modalInstance','passingService',function($scope,$modalInstance,passingService){
			
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

	   $scope.hstep = 1;
	   $scope.mstep = 15;

	   $scope.options = {
	     hstep: [1, 2, 3],
	     mstep: [1, 5, 10, 15, 25, 30]
	   };

	   $scope.ismeridian = true;
	   $scope.toggleMode = function() {
	     $scope.ismeridian = ! $scope.ismeridian;
	   };

	   $scope.update = function() {
	     var d = new Date();
	     d.setHours( 14 );
	     d.setMinutes( 0 );
	     $scope.mytime = d;
	   };

	   $scope.changed = function () {
	     console.log('Time changed to: ' + $scope.mytime);
	   };

	   $scope.clear = function() {
	     $scope.mytime = null;
	   };	
			
		 	 	$scope.cancel = function() {
		    	$modalInstance.dismiss('cancel');
		  	};

		}]);
	})()