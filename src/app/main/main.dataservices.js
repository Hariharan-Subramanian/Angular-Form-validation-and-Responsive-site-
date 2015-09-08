(function() {
    'use strict';
    angular.module('swApp')
        .service('mainService', mainService);
    mainService.$inject = ['dataService'];

    function mainService(dataService) {
        var service = {
            data: '',
            getAllcarouselData: getAllcarouselData,
            getAllbunitData: getAllbunitData
        };
        return service;

        function getAllcarouselData() {
            return dataService.getcarouselData().then(function(data) {
                service.data = data;
            });
        }

        function getAllbunitData() {
            return dataService.getbunitData().then(function(data) {
                service.data = data;
            });
        }
    }

})();
