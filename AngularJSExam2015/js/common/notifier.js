(function () {
    'use strict';

    function notifierService(toastr) {
        toastr.options.positionClass = 'toast-bottom-right';
        toastr.options.preventDuplicates = true;
        toastr.options.closeButton = true;
        toastr.options.closeMethod = 'fadeOut';
        toastr.options.timeOut = 1000;

        return {
            success: success,
            warning: warning,
            error: error
        };

        function success(msg) {
            toastr.success(msg);
        }

        function warning(msg) {
            toastr.warning(msg);
        }

        function error(msg) {
            toastr.error(msg);
        }
    };

    angular.module('myApp.services')
        .factory('notifierService', ['toastr', notifierService]);
}());