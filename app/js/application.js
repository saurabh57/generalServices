/*================================================================
App generalServices
==================================================================*/
'use strict';

var app = angular.module('generalServices', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when('/dashboard', {
            controller: 'dashboardCtrl',
            templateUrl: '../partials/_dashboard.html'
    	})

    	.otherwise({ redirectTo: '/dashboard' });
}]);
