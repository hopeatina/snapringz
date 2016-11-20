'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$window', function ($scope, $window) {
        $scope.sectionstyle = {"height": $window.innerHeight - 56 + "px"};
        $scope.three60gif = {
            background: "#ffffff url(./assets/neongreen720.gif) 50% 50% no-repeat",
        /* width: 100%; */
        margin: 0,
        height: "100%"
    };
    $scope.three60gif["background-size"] = "cover";
        $scope.active = [
            {selected: false, style: {}},
            {selected: false, style: {}},
            {selected: false, style: {}},
            {selected: false, style: {}},
            {selected: false, style: {}}
        ];

        $scope.switchGif = function (gifnumber){
            console.log(gifnumber);
            if (gifnumber == 1) {
                $scope.three60gif["background"] = "#ffffff url(./assets/neongreen720.gif) 50% 50% no-repeat"
            }
            if (gifnumber == 2) {
                $scope.three60gif["background"] = "#ffffff url(./assets/yellow720.gif) 50% 50% no-repeat"
            }
            if (gifnumber == 3) {
                $scope.three60gif["background"] = "#ffffff url(./assets/black720.gif) 50% 50% no-repeat"
            }
        };

        $scope.switchPic = function (picnumber) {
            if (!$scope.active[picnumber].selected) {
                $scope.active.forEach(function (item) {
                    item.style = false;
                })
            }
            $scope.active[picnumber].style = $scope.active[picnumber].selected ? {} : {background: "#7FFF00"};

            console.log($scope.active[picnumber].style, picnumber)

        };

    }]);