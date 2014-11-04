(function (){
	
	angular.module('basketball').factory("getTeamsFactory",getTeamsFactory);
	
	getTeamsFactory.$inject = ["$http"];
	function getTeamsFactory($http){
		return {
			teams: teams
		};
			
		function teams(){	
			return $http.get('getTeams.php').
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