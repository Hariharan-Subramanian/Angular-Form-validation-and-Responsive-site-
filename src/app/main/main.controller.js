(function() {

    'use strict';

    angular.module('swApp')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, mainService) {
        var vm = this;
        var carouselData = {};
        var bunitData = {};


        initmain();

        function initmain() {
            mainService.getAllcarouselData().then(function(data) {
                carouselData = mainService.data.data;
                vm.carosuselIsolate = carouselData;
            });
            mainService.getAllbunitData().then(function(data) {
                bunitData = mainService.data.data;
                vm.bunitIsolate = bunitData;
            });
        }
        vm.submitForm = function() {
            if ($scope.userForm.$valid) {

            }
        };

    }
    MainCtrl.$inject = ['$scope', 'mainService'];
})();
