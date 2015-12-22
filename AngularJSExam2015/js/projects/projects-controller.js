(function () {
    "use strict";

    function ProjectsController(projects, identity) {
        var vm = this;
        vm.request = {
            Page: 1
        }

        vm.nextPage = function nextPage() {
            vm.request.Page++;
        }

        vm.prevPage = function prevPage() {
            if (vm.request.Page == 1) {
                return;
            }
            vm.request.Page--
        }

        vm.filterProjects = function () {
            projects.filterProjects(vm.request)
                .then(function (filteredProjects) {
                    vm.publicProjects = filteredProjects;
                });
        }

        projects.getPublicProjects()
            .then(function (publicProjects) {
                vm.publicProjects = publicProjects;
            });
        vm.isAuthenticated = identity.isAuthenticated();
    }

    angular.module('myApp.controllers')
        .controller('ProjectsController', ['projectsService', 'IdentityService', ProjectsController]);
})();