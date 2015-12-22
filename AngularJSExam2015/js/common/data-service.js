(function () {
    'use strict';

    function dataService($http, $q, $resource, authorization, baseUrl, notifier) {

        return {
            get: get,
            post: post,
            put: put
        }

        function get(pathUrl, queryParams) {

            var defered = $q.defer();

            var authHeader = authorization.getAuthorizationHeader();

            $http.get(baseUrl + pathUrl, {  params: queryParams, headers: authHeader })
                .then(function (response) {
                    
                    defered.resolve(response.data);
                }, function error(response) {
                    error = getErrorMessage(response);
                    notifier.error(error);
                    defered.reject(error);
                });

            return defered.promise;
        }

        function post(pathUrl, postData) {

            var defered = $q.defer();
            var authHeader = authorization.getAuthorizationHeader();

            $http.post(baseUrl + pathUrl, postData, { headers: authHeader })
                .then(function (response) {
                    notifier.success(response.data);
                    defered.resolve(response.data);
                }, function error(response) {
                    error = getErrorMessage(response);
                    notifier.error(error);
                    defered.reject(error);
                });

            return defered.promise;
        }

        function put() {
            throw new Error('Not implemented');
        }

        function getErrorMessage(response) {
            var error = response.data.modelState;
            if (error && error[Object.keys(error)[0]][0]) {
                error = error[Object.keys(error)[0]][0];
            }
            else {
                error = response.message;
            }

            return error;
        }
    };

    angular.module('myApp.services')
        .factory('dataService', ['$http', '$q', '$resource', 'authorizationService', 'BaseUrl', 'notifierService', dataService]);
})();
