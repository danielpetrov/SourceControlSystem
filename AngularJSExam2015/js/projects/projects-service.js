(function () {
    'use strict';

    function projectsService(dataService) {


        return {
            getPublicProjects: getPublicProjects,
            addProject: addProject,
            filterProjects: filterProjects,
            getPrivateProjects : getPrivateProjects
        }


        function getPublicProjects() {

            return dataService.get('/api/projects');
        }

        function addProject(project) {
            return dataService.post('/api/projects/add', project);
        }

        function filterProjects(filters) {
            return dataService.get('/api/projects/all', filters);
        }

        function getPrivateProjects() {
            return dataService.get('/api/projects/all');
        }
    };

    angular.module('myApp.services')
        .factory('projectsService', ['dataService', projectsService]);
})();
