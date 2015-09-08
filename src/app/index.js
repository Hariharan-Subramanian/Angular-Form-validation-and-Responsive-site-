(function() {
    'use strict';
    angular.module('swApp', ['slick', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.validate', 'ui.router', 'ui.bootstrap'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/main/main.html',
                    controller: 'MainCtrl'
                })
            $urlRouterProvider.otherwise('/');
        })
})();
