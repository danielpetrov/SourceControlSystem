(function () {

    'use strict';

    function RegistrationController($scope, $location, auth, notifier) {
        $scope.signup = signup;

        function signup(user) {
            auth.signup(user).then(function () {
                notifier.success('Registration successful!');
                $location.path('/');
            })
        }
    };

    angular.module('myApp.controllers')
        .controller('RegistrationController', ['$scope', '$location', 'auth', 'notifierService', RegistrationController]);

})();