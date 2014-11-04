(function (){
	
	angular.module('basketball').factory("AddScheduleFactory",AddScheduleFactory);
	
	AddScheduleFactory.$inject = ["$http"];
	function AddScheduleFactory($http){
		return {
			schedule: schedule
		};
			
		function schedule(homeTeam,awayTeam,date){	
			return $http.post('schedule.php',{"homeTeam": homeTeam,"awayTeam": awayTeam,"date": date}).
			success(function(data,status){
				console.log("successfully posted");
				return status;
			}).	
			error(function(data,status){
				console.log("failure to post");
				return status;
			})
		};	
	};
})()