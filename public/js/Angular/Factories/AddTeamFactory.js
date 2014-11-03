(function (){
	
	angular.module('basketball').factory("AddTeamFactory",AddTeamFactory);
	
	AddTeamFactory.$inject = ["$http"];
	function AddTeamFactory($http){
		return {
			newTeam: newTeam
		};
			
		function newTeam(teamName){	
			return $http.post('newTeam.php',{"name": teamName}).
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