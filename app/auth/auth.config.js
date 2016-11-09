(() => {
  angular
    .module('auth')
    .config(configAuth);

  configAuth.$inject = ['$httpProvider'];
  function configAuth($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  }
})();
