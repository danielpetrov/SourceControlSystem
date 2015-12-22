(function () {
    "use strict";

    function usernameDirective() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/username-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('userName', [usernameDirective]);
})();