(function() {
	
	angular.module('basketball').directive('teamSchedule',teamSchedule);

	function teamSchedule(){
		return{
			restrict:	'E',
			templateUrl: 'public/js/Angular/templates/tabs/schedule.html'
		}
	}
	
})()
