(function(){
angular.module('basketball').controller('ScheduleController',ScheduleController);


	ScheduleController.$inject = ['$scope','getScheduleFactory'];

	function ScheduleController($scope,getScheduleFactory) {

	
	 var factoryResponse = getScheduleFactory.schedule();
	 factoryResponse.then(function(response){
		 $scope.name = response.data;
		 console.log($scope.name);
		 
	 });
	 
	var DateTemplate = '<div class="ngCellText" ng-class="col.colIndex()"><span class="thick">{{row.entity.Date}}</span></div>';
  var HomeTemplate = '<div class="ngCellText" ng-class="col.colIndex()"><span class="thick">{{row.entity.Home}}</div>';
  var HomeScoreTemplate = '<div class="ngCellText" ng-class="col.colIndex()"><span class="thick">{{row.entity.home_score}}</div>';
  var AwayScoreTemplate = '<div class="ngCellText" ng-class="col.colIndex()"><span class="thick">{{row.entity.away_score}}</div>';
  var AwayTemplate = '<div class="ngCellText" ng-class="col.colIndex()"><span class="thick">{{row.entity.Away}}</div>';
	var rowTemplate = '<div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div><div ng-cell></div></div>'
	
	
	
     $scope.gridOptions = {
			 data: 'name',
			 rowHeight: 70,
			 headerRowHeight: 50,
			 plugins: [new ngGridFlexibleHeightPlugin()],
				
			 columnDefs: [
 	    {
 			  field: '',
 			  displayName: '',
 			  width: '2%'
 		  },
 	    {
 	      displayName: 'Date',
				cellTemplate: DateTemplate,
 	      width: '35%',
 				cellClass: 'name-grid'
 	    },
 	    {
 	      displayName: 'Home',
				cellTemplate: HomeTemplate,
 	      width: '15%',
 				cellClass: 'name-grid'
 	    },
 	    {
 	      displayName: 'Score',
				cellTemplate: HomeScoreTemplate,
				width: '15%',
 				cellClass: 'name-grid'
 	    },
			
 	    {
 	      displayName: 'Score',
				cellTemplate: AwayScoreTemplate,
 	      width: '15%',
 				cellClass: 'name-grid'
 	    },
			
 	    {
 	      displayName: 'Away',
				cellTemplate: AwayTemplate,
 	      width: '20%',
 				cellClass: 'name-grid'
 	    }]			 
		 };
};

})()