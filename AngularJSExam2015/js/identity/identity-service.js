(function () {
    'use strict';

    function identityService($cookieStore) {

        return {
            getCurrentUser: getCurrentUser,
            setCurrentUser: setCurrentUser,
            isAuthenticated: isAuthenticated
        }

        var cookieStorageUserKey = 'currentApplicationUser';

        var currentUser;

        function getCurrentUser() {
            var savedUser = $cookieStore.get(cookieStorageUserKey);
            if (savedUser) {
                return savedUser;
            }

            return currentUser;
        }

        function setCurrentUser(user) {
            if (user) {
                $cookieStore.put(cookieStorageUserKey, user);
            }
            else {
                $cookieStore.remove(cookieStorageUserKey);
            }

            currentUser = user;
        }

        function isAuthenticated() {
            return !!this.getCurrentUser();
        }
    };

    angular.module('myApp.services')
        .factory('IdentityService', ['$cookieStore', identityService]);
})();