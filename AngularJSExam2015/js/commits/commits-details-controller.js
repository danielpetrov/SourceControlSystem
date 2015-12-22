(function () {
    "use strict";

    function CommitsDetailsController($routeParams) {
       var vm = this;

       vm.id = $routeParams.id;
       vm.name = $routeParams.name;
       vm.sourceCode = $routeParams.sourceCode;
    }

    angular.module('myApp.controllers')
        .controller('CommitsDetailsController', ['$routeParams', CommitsDetailsController]);
})();