(function () {
    "use strict";

    function ProjectsDetailsController($routeParams) {
       var vm = this;

       //vm.TotalUsers = $routeParams.TotalUsers;
       //vm.Name = $routeParams.Name;
       //vm.License = $routeParams.License;
       //vm.CreatedOn = $routeParams.CreatedOn;
    }

    angular.module('myApp.controllers')
        .controller('ProjectsDetailsController', ['$routeParams', ProjectsDetailsController]);
})();