(function () {
    'use strict';

    function licensesService(data) {

        return {
            get: get,
        }

        function get() {
            return data.get('/api/licenses');
        }
    };

    angular.module('myApp.services')
        .factory('licensesService', ['dataService', licensesService]);
})();
