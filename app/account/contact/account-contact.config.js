(() => {
  'use strict';
  angular
    .module('accountContact')
    .config(configAccountContact);

  configAccountContact.$inject = ['$stateProvider'];

  function configAccountContact($stateProvider) {
    $stateProvider
      .state('nav.accountContact', {
          url: '/accountContact/:userIdFound',
          views: {
            'menuContent': {
              templateUrl: 'account/contact/account-contact.html',
              controller: 'AccountContactCtrl',
              controllerAs: 'AccountContactCtrl'
            }
          }
        }
      );
  }
})
();
