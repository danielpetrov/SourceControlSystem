(function () {
    "use strict";

    function CreateProjectController($location, projects, licenses) {
        var vm = this;

        vm.addProject = addProject;

        licenses.get().
            then(function (allLicenses) {
                vm.licenses = allLicenses;
            })

        function addProject(newProject) {
            projects.addProject(newProject)
            .then(function(addedProject) {
                $location.path('/project/details/' + addedProject.id);
            })
        }
    }

    angular.module('myApp.controllers')
        .controller('CreateProjectController', ['$location', 'projectsService', 'licensesService', CreateProjectController]);
})();