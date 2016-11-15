'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$window', function($scope, $window) {
  $scope.sectionstyle ={"height": $window.innerHeight-56 + "px"};
  $scope.active = [
      {selected: false, style: {}},
      {selected: false, style: {}},
      {selected: false, style: {}},
      {selected: false, style: {}},
      {selected: false, style: {}}
  ];
  $scope.switchPic = function(picnumber){
    if (!$scope.active[picnumber].selected) {
      $scope.active.forEach(function(item){
        item.style = false;
      })
    }
    $scope.active[picnumber].style = $scope.active[picnumber].selected ? {} : { background: "#7FFF00"};

    console.log($scope.active[picnumber].style, picnumber)

  };

}]);