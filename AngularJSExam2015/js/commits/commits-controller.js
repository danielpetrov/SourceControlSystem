(function () {
    "use strict";

    function CommitsController(commits, identity) {
       var vm = this;
        
       commits.getPublicCommits()
            .then(function (publicCommits) {
                vm.publicCommits = publicCommits;
            });

       vm.addCommit = function addCommit(newCommit) {
           //much confused, no time, wow
           newCommit.projectId = "5";
           commits.ctreateCommit(newCommit)
       }

       vm.isAuthenticated = identity.isAuthenticated();
    }

    angular.module('myApp.controllers')
        .controller('CommitsController', ['commitsService','IdentityService', CommitsController]);
})();