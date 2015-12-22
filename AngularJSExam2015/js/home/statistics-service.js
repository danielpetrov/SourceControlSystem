(function () {
    "use strict";

    function statistics($q, dataService) {
        
        var statistics;

        return {
            getStats: getStats
        }

        function getStats() {
            if (statistics) {
                return $q.when(statistics);
            } else {
                return dataService.get('/api/statistics')
                    .then(function (stats) {
                        statistics = stats;
                        return stats;
                    });
            }
        }
    }

    angular.module('myApp.services')
        .factory('statisticsService', ['$q', 'dataService', statistics]);
})();