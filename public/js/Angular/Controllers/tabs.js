(function(){
angular.module('basketball').controller('TabsDemoController',TabsDemoController);

function TabsDemoController() {
	var vm = this;
  vm.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

 function alertMe(){
    setTimeout(function() {
      alert('You\'ve selected the alert tab!');
    });
  };
}

})()