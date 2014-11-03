(function(){
angular.module('basketball').controller('ScheduleController',ScheduleController);

ScheduleController.$inject=['$scope'];

function ScheduleController($scope) {
	$scope.schedule = "Today there are not games avaliable, please go home and take a rest"; 
}

})()