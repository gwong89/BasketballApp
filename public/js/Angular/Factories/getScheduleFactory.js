(function (){
	
	angular.module('basketball').factory("getScheduleFactory",getScheduleFactory);
	
	getScheduleFactory.$inject = ["$http"];
	function getScheduleFactory($http){
		return {
			schedule: schedule
		};
			
		function schedule(){	
			return $http.get('getSchedule.php').
			success(function(data,status){
				console.log("successfully get");
				return data;
			}).	
			error(function(data,status){
				console.log("failure to get");
				return status;
			})
		};	
	};
})()