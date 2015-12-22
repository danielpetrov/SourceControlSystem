(function () {
    'use strict';

    function authorizationService(identity) {
        return {
            getAuthorizationHeader: getAuthorizationHeader
        }

        function getAuthorizationHeader() {

            if (!identity.isAuthenticated()) {
                return {};
            }
            return {
                'Authorization': 'Bearer ' + identity.getCurrentUser()['access_token']
            };
        }
    };

    angular.module('myApp.services')
        .factory('authorizationService', ['IdentityService', authorizationService]);

})();