(function(){
angular.module('basketball').controller('TeamStandingController',TeamStandingController);

TeamStandingController.$inject = ['$scope','getStandingFactory'];

function TeamStandingController($scope,getStandingFactory) {
	
	 var factoryResponse = getStandingFactory.standing();
	 factoryResponse.then(function(response){
		 $scope.name = response.data;
		 console.log($scope.name);
		 
	 });
	 
	var NameTemplate = '<div class="ngCellText" ng-class="col.colIndex()"><span class="thick treatment-description">{{row.entity.Name}}</span></div>';
  var WinTemplate = '<div class="ngCellText" ng-class="col.colIndex()"><span class="thick">{{row.entity.Wins}}</div>';
  var LossTemplate = '<div class="ngCellText" ng-class="col.colIndex()"><span class="thick">{{row.entity.Losess}}</div>';
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
 	      displayName: 'Name',
				cellTemplate: NameTemplate,
 	      width: '45%',
 				cellClass: 'name-grid'
 	    },
 	    {
 	      displayName: 'Wins',
				cellTemplate: WinTemplate,
 	      width: '33%',
 				cellClass: 'name-grid'
 	    },
 	    {
 	      displayName: 'Losses',
				cellTemplate: LossTemplate,
 				cellClass: 'name-grid'
 	    }]			 
		 };
};

})()