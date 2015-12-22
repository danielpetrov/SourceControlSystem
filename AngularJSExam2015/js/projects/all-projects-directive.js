(function () {
    "use strict";

    function projectsDirective() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/all-projects-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('projectsDirective', [projectsDirective]);
})();