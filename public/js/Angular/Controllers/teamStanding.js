(function(){
angular.module('basketball').controller('TeamStandingController',TeamStandingController);

TeamStandingController.$inject = ['$scope'];

function TeamStandingController($scope) {
  $scope.myData = [{name: "Moroni", age: 50},
                      {name: "Tiancum", age: 43},
                      {name: "Jacob", age: 27},
                      {name: "Nephi", age: 29},
                      {name: "Enos", age: 34}];
     $scope.gridOptions = { data: 'myData' };
};

})()