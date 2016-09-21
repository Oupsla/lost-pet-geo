'use strict';

(function () {
  angular.module('lostpetgeo', ['ionic', 'home', 'add']);
})();
'use strict';

(function () {
  'use strict';

  angular.module('add', []);
})();
'use strict';

(function () {
  angular.module('home', []);
})();
'use strict';

(function () {
  angular.module('lostpetgeo').run(runApplication).config(configApplication);

  runApplication.$inject = ['$ionicPlatform'];
  function runApplication($ionicPlatform) {
    $ionicPlatform.ready(function () {
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
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'tabs/tabs.html'
    });

    // Each tab has its own nav history stack:


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('add').config(configAdd);

  configAdd.$inject = ['$stateProvider'];

  function configAdd($stateProvider) {
    $stateProvider.state('tab.add', {
      url: '/add',
      views: {
        'tab-add': {
          templateUrl: 'add/add.html',
          controller: 'AddCtrl',
          controllerAs: 'addCtrl'
        }
      }
    });
  }
})();
'use strict';

(function () {
  angular.module('home').config(configHome);

  configHome.$inject = ['$stateProvider'];
  function configHome($stateProvider) {
    $stateProvider.state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'home/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'homeCtrl'
        }
      }
    });
  }
})();
'use strict';

self.addEventListener('activate', function (event) {});

self.addEventListener('fetch', function (event) {});

self.addEventListener('push', function (event) {});
'use strict';

(function () {
  'use strict';

  angular.module('add').controller('AddCtrl', addController);

  addController.$inject = [];

  function addController() {
    // let self = this;

    console.log("AddCtrl", this);
  }
})();
'use strict';

(function () {
  angular.module('home').controller('HomeCtrl', homeController);

  homeController.$inject = [];

  function homeController() {
    console.log(this);
  }
})();
"use strict";
//# sourceMappingURL=bundle.js.map
