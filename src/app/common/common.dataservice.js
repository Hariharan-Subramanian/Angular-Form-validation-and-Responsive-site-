(function() {
    'use strict';
    angular
        .module('swApp')
        .service('dataService', dataService);

    function dataService($http) {
        this.getcarouselData = function() {
            return $http.get('./data/carouselData.json');
        };
        this.getbunitData = function() {
            return $http.get('./data/bunitData.json');
        };
    }
    dataService.$inject = ['$http'];
})();
