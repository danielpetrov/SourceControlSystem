(function () {
	"use strict";

	function HomeController(statistics, projects, commits) {
		var vm = this;
		vm.stats = {};

		statistics.getStats()
            .then(function (stats) {
               vm.stats = stats;
            });

	    projects.getPublicProjects()
            .then(function (publicProjects) {
                vm.publicProjects = publicProjects;
            });

		commits.getPublicCommits()
            .then(function (publicCommits) {
                vm.publicCommits = publicCommits;
            });
	}

	angular.module('myApp.controllers')
        .controller('HomeController', ['statisticsService', 'projectsService', 'commitsService', HomeController]);
})();