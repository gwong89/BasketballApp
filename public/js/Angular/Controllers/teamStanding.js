(function(){
angular.module('basketball').controller('TeamStandingController',TeamStandingController);

TeamStandingController.$inject = ['$scope'];

function TeamStandingController($scope) {
	$scope.standing = ['Apple','Google','Microsoft'];
};

})()