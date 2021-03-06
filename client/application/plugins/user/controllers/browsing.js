/*
 * Scientilla v0.0.1 (http://www.scientilla.net)
 * Copyright 2014 Fondazione Istituto Italiano di Tecnologia (http://www.iit.it)
 * Licensed under MIT (https://github.com/scientilla/scientilla/blob/master/LICENSE)
 */

angular.module("user").controller(
    "usersBrowsingController", ["$scope", "usersService", "systemStatusService", "$window", "$location", function($scope, usersService, systemStatusService, $window, $location) {
        $scope.aUsers = [];
        
        $scope.retrieveUsers = function retrieveUsers() {
            $scope.empty = false;
            $scope.ready = false;
            $scope.error = false;
            usersService.getUsers($window.sessionStorage.token).success(function(data, status, headers, config) {
                $scope.aUsers = data;
                if ($scope.aUsers.length === 0) {
                    $scope.empty = true;
                }            
                $scope.ready = true;
            }).error(function(data, status, headers, config) {
                $scope.error = true;
                systemStatusService.react(status);
            });
            
            return retrieveUsers;
        }();
    }]
);