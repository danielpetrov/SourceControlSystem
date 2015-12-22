(function () {
    'use strict';

    function commitsService(dataService) {


        return {
            getPublicCommits: getPublicCommits,
            ctreateCommit: ctreateCommit,
        }


        function getPublicCommits() {

            return dataService.get('/api/commits');
        }

        function ctreateCommit(commit) {
            return dataService.post('/api/commits', commit);
        }
    };

    angular.module('myApp.services')
        .factory('commitsService', ['dataService', commitsService]);
})();
