'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$window', function ($scope, $window) {
        $window.Maitre = {uuid: "MF3af70aaa3f"};
        angular.element($window).bind('resize', function () {
            console.log($window.innerWidth);
            $scope.sectionstyletest = $window.innerWidth < 1283 ? {"height": (271.4*4) + .3*$window.innerHeight + "px"} : {"height": (271.4*2) + .3*$window.innerHeight + "px"} ;
            console.log(.1*$window.innerHeight, $scope.sectionstyle);
            if ($window.innerWidth - 391.25 > 0) {
                $scope.emaildiv = {"margin-left": ($window.innerWidth - 391.25) / 2 + "px"};
            }
            $scope.sectionstyle = {"height": $window.innerHeight - 56 + "px" } ;
            $scope.testyle = $window.innerWidth < 1283 ? {
                "margin-bottom": 0+"px"
            } :
            {"margin-left": ($window.innerWidth - 1000) / 4.5 + "px", "margin-right": ($window.innerWidth - 1000) / 4.5 + "px", "margin-bottom": 0+"px"};
            console.log($scope.testyle);
            if ($window.innerWidth < 1283 && $window.innerWidth > 563) {
                $scope.testyle["margin-left"] =($window.innerWidth - 500) / 2 + "px";
                $scope.testyle["margin-right"] =($window.innerWidth - 500) / 2 + "px";
            }
        });
        $scope.sectionstyletest = $window.innerWidth < 1283 ? {"height": (271.4*4) + .3*$window.innerHeight + "px"} : {"height": (271.4*2) + .3*$window.innerHeight + "px"} ;
        console.log(.1*$window.innerHeight, $scope.sectionstyle);
        if ($window.innerWidth - 391.25 > 0) {
            $scope.emaildiv = {"margin-left": ($window.innerWidth - 391.25) / 2 + "px"};
        }
        $scope.sectionstyle = {"height": $window.innerHeight - 56 + "px" } ;
        $scope.testyle = $window.innerWidth < 1283 ? {
            "margin-bottom": 0+"px"
        } :
        {"margin-left": ($window.innerWidth - 1000) / 4.5 + "px", "margin-right": ($window.innerWidth - 1000) / 4.5 + "px", "margin-bottom": 0+"px"};
        console.log($scope.testyle);
        if ($window.innerWidth < 1283 && $window.innerWidth > 563) {
            $scope.testyle["margin-left"] =($window.innerWidth - 500) / 2 + "px";
            $scope.testyle["margin-right"] =($window.innerWidth - 500) / 2 + "px";
        }
        $scope.smallscreen = $window.innerWidth > 750;
        console.log($window.innerWidth);
        $scope.three60gif = {
            background: "#ffffff url(./assets/neongreen720.gif) 50% 50% no-repeat",
            /* width: 100%; */
            margin: 0,
            height: "100%"
        };
        var texts = ["Snap on Tap", "The ultimate secondary accessory", "Because technology...", "For the super-early adopter"];
        $scope.introtext = texts[Math.floor(Math.random() * texts.length)];
        $scope.three60gif["background-size"] = "cover";
        $scope.active = [
            {selected: false, style: {}},
            {selected: false, style: {}},
            {selected: false, style: {}},
            {selected: false, style: {}},
            {selected: false, style: {}}
        ];

        $scope.switchGif = function (gifnumber) {
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
            if (picnumber == 0) {
                $scope.featuretext = "Activate spectacles";
            }
            if (picnumber == 1) {
                $scope.featuretext = "Quick button select";
            }
            if (picnumber == 2) {
                $scope.featuretext = "Vibration feedback";
            }
            if (picnumber == 3) {
                $scope.featuretext = "Discrete";
            }
            if (picnumber == 4) {
                $scope.featuretext = "Charges in case";
            }
            console.log($window.innerWidth);


            console.log($scope.active[picnumber].style, picnumber)

        };

    }]);