(function () {
    'use strict';

    function auth($http, $q, identity, authorization, baseServiceUrl, notifier) {
        var usersApi = baseServiceUrl + '/api/account'

        return {
            signup: signup ,
            login: login ,
            logout: logout ,
            isAuthenticated: isAuthenticated 
        }

        function signup(user) {
            var deferred = $q.defer();

            $http.post(usersApi + '/register', user)
                .success(function () {
                    deferred.resolve();
                }, function (response) {
                    var error = response.data.modelState;
                    if (error && error[Object.keys(error)[0]][0]) {
                        error = error[Object.keys(error)[0]][0];
                    }
                    else {
                        error = response.message;
                    }

                    notifier.error(error);
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function login(user) {
            var deferred = $q.defer();
            user['grant_type'] = 'password';
            $http.post(baseServiceUrl + '/token', 'username=' + user.username + '&password=' + user.password + '&grant_type=password', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function (response) {
                    if (response["access_token"]) {
                        identity.setCurrentUser(response);
                        deferred.resolve(true);
                    }
                    else {
                        deferred.resolve(false);
                    }
                });

            return deferred.promise;
        }

        function logout() {
            var deferred = $q.defer();

            var headers = authorization.getAuthorizationHeader();
            $http.post(usersApi + '/logout', {}, { headers: headers })
                .success(function () {
                    identity.setCurrentUser(undefined);
                    deferred.resolve();
                });

            return deferred.promise;
        }

        function isAuthenticated() {
            if (identity.isAuthenticated()) {
                return true;
            }
            else {
                return $q.reject('not authorized');
            }
        }
    }

    angular.module('myApp.services')
        .factory('auth', ['$http', '$q', 'IdentityService', 'authorizationService', 'BaseUrl', 'notifierService', auth]);
})();