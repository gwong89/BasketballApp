(function (){
	
	angular.module('basketball').service("passingService",passingService);
	
	function passingService(){
		var product = [];
		var service ={
			getTable: getTable,
			passTable: passTable
		};	
		return service;
	function getTable(theObj){
		product = theObj;
	};
	
	function passTable(){
		return product;
	};
	}	
})()