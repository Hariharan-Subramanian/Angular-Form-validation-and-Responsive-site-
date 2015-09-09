(function() {

    'use strict';

    angular.module('swApp')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, mainService) {
        var vm = this;
        var carouselData = {};
        var bunitData = {};
        vm.isSuccess=false;


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
            if ($scope.regform.$valid) {
                     vm.isSuccess=true;
                     console.log(vm.isSuccess)
            }
        };

    }
    MainCtrl.$inject = ['$scope', 'mainService'];
})();
