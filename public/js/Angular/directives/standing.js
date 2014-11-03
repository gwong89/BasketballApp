(function() {
	
	angular.module('basketball').directive('teamStanding',teamStanding);

	function teamStanding(){
		return{
			restrict:	'E',
			templateUrl: 'public/js/Angular/templates/tabs/standing.html'
		}
	}
	
})()
