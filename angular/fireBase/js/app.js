'use strict';

/* App Module */
var phonecatApp = angular.module('phonecatApp',
    [   'ngRoute',
        'phoneCatControllers',
        'phoneCatFilters',
        'phoneCatServices',
        'phoneCatAnimations'
    ]);

phonecatApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/phones', {
        templateUrl : 'partials/phone-list.html',
        controller : 'PhoneListCtrl'
    }).
    when('/phones/:idPhone', {
        templateUrl : 'partials/phone-detail.html',
        controller : 'PhoneDetailCtrl'
    }).
    otherwise({
        redirectTo : '/phones'
    });
}]);