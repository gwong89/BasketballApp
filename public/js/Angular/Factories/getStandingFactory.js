(function (){
	
	angular.module('basketball').factory("getStandingFactory",getStandingFactory);
	
	getStandingFactory.$inject = ["$http"];
	function getStandingFactory($http){
		return {
			standing: standing
		};
			
		function standing(){	
			return $http.get('standing.php').
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