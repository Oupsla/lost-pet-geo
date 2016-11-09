(() => {
  'use strict';

  angular
    .module('auth')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', '$injector'];
  function authInterceptor($rootScope, $q, $injector) {
    return {
      responseError(rejection) {
        var defered = $q.defer();

        if (rejection.status === 401 || rejection.status === 403) {
          $rootScope.$broadcast('unlogged');
          $rootScope.$on('LOGIN_SUCCESS', () => {
            var $http = $injector.get('$http');
            return $http(rejection.config)
            .then((data) => {
              defered.resolve(data);

              return data;
            });
          });
          $rootScope.$on('LOGIN_ERROR', () => defered.reject());
        }


        return defered.promise;
      }
    };
  }
})();
