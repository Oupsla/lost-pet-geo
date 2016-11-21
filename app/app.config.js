(function () {
  angular
    .module('lostpetgeo')
    .run(runApplication)
    .config(configApplication);

    runApplication.$inject = ['$ionicPlatform'];
    function runApplication($ionicPlatform) {
      $ionicPlatform.ready(() => {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    }

    configApplication.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configApplication($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

      // setup an abstract state for the tabs directive
      .state('nav', {
        url: '/nav',
        abstract: true,
        templateUrl: 'navs/navs.html',
        controller: 'NavsCtrl',
        controllerAs: 'NavsCtrl'
      });

      // Each tab has its own nav history stack:


      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/nav/listAlert');

    }
})();
