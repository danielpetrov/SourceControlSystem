(function () {

    'use strict';

    function LoginCtrl($scope, $location, notifier, identity, auth) {
        $scope.identity = identity;

        $scope.login = login;

        $scope.logout = logout;

        function login(user, loginForm) {
            if (loginForm.$valid) {
                auth.login(user).then(function (success) {
                    if (success) {
                        notifier.success('Successful login!');
                    }
                    else {
                        notifier.error('User name/Password combination is not valid!');
                    }
                });
            }
            else {
                notifier.error('User name and password are required fields!')
            }
        }

        function logout() {
            auth.logout().then(function () {
                notifier.success('Successful logout!');
                if ($scope.user) {
                    $scope.user.email = '';
                    $scope.user.username = '';
                    $scope.user.password = '';
                }

                $scope.loginForm.$setPristine();
                $location.path('/');
            })
        }
    }

    angular.module('myApp.controllers'). 
        controller('LoginController', ['$scope', '$location', 'notifierService', 'IdentityService', 'auth', LoginCtrl]);
})();