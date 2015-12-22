(function () {
    'use strict';

    function beautifullDateFilter() {

        return function beautifullDateFilter(input) {
            var monthNames = [
                 "January", "February", "March",
                 "April", "May", "June", "July",
                 "August", "September", "October",
                 "November", "December"
            ];

            var date = new Date(input);
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();

            var time = input.split("T")[1].substr(0,8);

            return day + ' ' + monthNames[monthIndex] + ' ' + year + ' At ' + time;
           
        }
    }

    angular.module('myApp.filters')
        .filter('beautifullDateFilter', [beautifullDateFilter]);

})();
