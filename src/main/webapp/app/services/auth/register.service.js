(function () {
    'use strict';

    angular
        .module('jhipwithmysqlApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
