(function () {
    'use strict';

    var CONTROLLER_VIEW_MODEL_NAME = 'vm';
    var PARTIALS_PREFIX = 'views/partials/';

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: PARTIALS_PREFIX + 'home/home.html',
                controller: 'HomeController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/unauthorized', {
                template: '<h1 class=text-center> YOU ARE NOT AUTHORIZED! </h1>'
            })
            .when('/projects', {
                templateUrl: PARTIALS_PREFIX + 'projects/all-projects.html',
                controller: 'ProjectsController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/commits', {
                templateUrl: PARTIALS_PREFIX + 'commits/commits.html',
                controller: 'CommitsController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/commits/:id', {
                templateUrl: PARTIALS_PREFIX + 'commits/commits-details.html',
                controller: 'CommitsDetailsController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/projects/:Id', {
                templateUrl: PARTIALS_PREFIX + 'projects/project-details.html',
                controller: 'ProjectsDetailsController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/projects/add', {
                templateUrl: PARTIALS_PREFIX + 'projects/create-project.html',
                controller: 'CreateProjectController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/register', {
                templateUrl: PARTIALS_PREFIX + 'identity/register.html',
                controller: 'RegistrationController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .otherwise({ redirectTo: '/' });
    }

   

    angular.module('myApp.filters', []);
    angular.module('myApp.services', []);
    angular.module('myApp.directives', []);
    angular.module('myApp.controllers', ['myApp.services']);

    angular.module('myApp', ['ngRoute', 'ngResource', 'ngCookies', 'kendo.directives', 'myApp.controllers', 'myApp.services', 'myApp.filters', 'myApp.directives'])
        .config(['$routeProvider', config])
        .value('toastr', toastr)
        .constant('BaseUrl', 'http://spa.bgcoder.com');
})();
