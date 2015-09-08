(function() {
    'use strict';
    angular.module('swApp')
        .directive('swCarousel', function() {
            return {
                restrict: 'EA',
                scope: {
                    data: '='
                },
                templateUrl: 'app/main/carousel.html',
                controllerAs: 'vm'
            };
        }).directive('swBunit', function() {
            return {
                restrict: 'EA',
                scope: {
                    data: '='
                },
                templateUrl: 'app/main/businessunit.html',
                controllerAs: 'vm'
            };
        });
})();
