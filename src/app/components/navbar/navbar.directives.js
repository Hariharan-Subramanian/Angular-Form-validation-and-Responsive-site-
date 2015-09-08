(function() {
    'use strict';
    angular.module('swApp')
        .directive('swFooter', function() {
            return {
                restrict: 'E',
                templateUrl: 'app/components/navbar/footer.html'
            };
        })
        .directive('swHeader', function() {
             return {
                restrict: 'E',
                templateUrl: 'app/components/navbar/header.html',
                controllerAs: 'vm',
                bindToController: true
            };

        });


})();
