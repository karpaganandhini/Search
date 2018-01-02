
phonecatApp.controller('navbarController', AppCtrl);
  function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';

    $scope.goto = function(page) {
      console.log("Goto " + page);
    }
  }
