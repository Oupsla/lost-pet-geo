'use strict';

(function () {
  angular.module('lostpetgeo', ['ionic', 'listAlert', 'add', 'listPet', 'pet', 'alert', 'account']);
})();
'use strict';

(function () {
  'use strict';

  angular.module('account', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('add', []);
})();
'use strict';

(function () {
  angular.module('alert', []);
})();
'use strict';

(function () {
  angular.module('pet', []);
})();
'use strict';

(function () {
  angular.module('listAlert', []);
})();
'use strict';

(function () {
  angular.module('listPet', []);
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
    $urlRouterProvider.otherwise('/tab/listAlert');
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('account').config(configAccount);

  configAccount.$inject = ['$stateProvider'];

  function configAccount($stateProvider) {
    $stateProvider.state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'account/account.html',
          controller: 'AccountCtrl',
          controllerAs: 'AccountCtrl'
        }
      }
    });
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
          controllerAs: 'AddCtrl'
        }
      }
    });
  }
})();
'use strict';

(function () {
  angular.module('alert').config(configAlert);

  configAlert.$inject = ['$stateProvider'];
  function configAlert($stateProvider) {
    $stateProvider.state('alert', {
      url: '/alert/:alertId',
      templateUrl: 'alert/alert.html',
      controller: 'AlertCtrl',
      controllerAs: 'AlertCtrl'
    });
  }
})();
'use strict';

(function () {
  angular.module('pet').config(configAlert);

  configAlert.$inject = ['$stateProvider'];
  function configAlert($stateProvider) {
    $stateProvider.state('pet', {
      url: '/pet/:petId',
      templateUrl: 'pet/pet.html',
      controller: 'PetCtrl',
      controllerAs: 'PetCtrl'
    });
  }
})();
'use strict';

(function () {
  angular.module('listAlert').config(configListAlert);

  configListAlert.$inject = ['$stateProvider'];
  function configListAlert($stateProvider) {
    $stateProvider.state('tab.listAlert', {
      url: '/listAlert',
      views: {
        'tab-listAlert': {
          templateUrl: 'list/alert/list-alert.html',
          controller: 'ListAlertCtrl',
          controllerAs: 'ListAlertCtrl'
        }
      }
    });
  }
})();
'use strict';

(function () {
  angular.module('listPet').config(configListPet);

  configListPet.$inject = ['$stateProvider'];
  function configListPet($stateProvider) {
    $stateProvider.state('listPet', {
      url: '/listPet',
      templateUrl: 'list/pet/list-pet.html',
      controller: 'ListPetCtrl',
      controllerAs: 'ListPetCtrl'
    });
  }
})();
// self.addEventListener('activate', function (event) {

// });

// self.addEventListener('fetch', function (event) {

// });

// self.addEventListener('push', function (event) {

// });
"use strict";
'use strict';

(function () {
  'use strict';

  angular.module('account').controller('AccountCtrl', accountController);

  accountController.$inject = [];

  function accountController() {
    var self = this;

    function getAccount() {
      self.account = {};
    }

    function init() {
      getAccount();
    }

    init();
  }
})();
"use strict";
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
  angular.module('add').service('AddService', addService);

  addService.$inject = ['$q'];
  function addService($q) {
    var self = this;
  }
})();
"use strict";
'use strict';

(function () {
  angular.module('alert').controller('AlertCtrl', alertController);

  alertController.$inject = ['$stateParams', 'AlertService'];
  function alertController($stateParams, AlertService) {
    var self = this;

    function getAlert(id) {

      AlertService.getAlert(id).then(function (result) {
        self.alert = result;
      });
    }

    function init() {
      getAlert($stateParams.alertId);
    }

    init();
  }
})();
'use strict';

(function () {
  angular.module('alert').service('AlertService', alertService);

  alertService.$inject = ['$q'];
  function alertService($q) {
    var self = this;

    self.getAlert = function (id) {
      return $q(function (resolve, reject) {
        return resolve({
          id: id,
          state: 'Perdu',
          photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
          date: '10-08-2016',
          comment: "J'ai perdu mon chien ... :",
          pet: {
            details: {
              type: 'chien',
              name: 'toutou',
              race: 'bichon',
              color: 'blanc'
            }
            /*vaccins: {
             rage: 'ok'
             }*/
          }
        });
      });
    };
  }
})();
"use strict";
'use strict';

(function () {
  angular.module('pet').controller('PetCtrl', alertController);

  alertController.$inject = ['$stateParams', 'PetService'];
  function alertController($stateParams, PetService) {
    var self = this;

    function getAlert(id) {
      PetService.getPet(id).then(function (result) {
        self.pet = result;
      });
    }

    function init() {
      getAlert($stateParams.petId);
    }

    init();
  }
})();
'use strict';

(function () {
  angular.module('pet').service('PetService', petService);

  petService.$inject = ['$q'];
  function petService($q) {
    var self = this;

    self.getPet = function (id) {
      return $q(function (resolve, reject) {
        return resolve({
          id: id,
          type: 'chien',
          photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
          name: 'toutou',
          race: 'bichon',
          color: 'blanc'
          /*vaccins: {
           rage: 'ok'
           }*/
        });
      });
    };
  }
})();
"use strict";
'use strict';

(function () {
  angular.module('listAlert').controller('ListAlertCtrl', listAlertController);

  listAlertController.$inject = ['ListAlertService'];
  function listAlertController(ListAlertService) {
    var self = this;

    function getListAlert() {
      ListAlertService.getListAlert().then(function (result) {
        self.listAlert = result;
      });
    }

    function init() {
      getListAlert();
    }

    init();
  }
})();
'use strict';

(function () {
  angular.module('listAlert').service('ListAlertService', listAlertService);

  listAlertService.$inject = ['$q'];
  function listAlertService($q) {
    var self = this;

    self.getListAlert = function () {
      return $q(function (resolve, reject) {
        return resolve([{
          id: 1,
          state: 'Perdu',
          date: '10-08-2016',
          photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
          pet: {
            type: 'chien',
            name: 'toutou',
            race: 'bichon',
            color: 'blanc'
          }
        }, {
          id: 2,
          state: 'Perdu',
          date: '10-08-2016',
          photo: 'http://previews.123rf.com/images/bartkowski/bartkowski1203/bartkowski120300005/12612383-Noir-petit-chaton-assis-un-sur-un-fond-blanc-Banque-d\'images.jpg',
          pet: {
            type: 'chat',
            name: 'chaton',
            state: 'Perdu',
            race: '',
            color: 'noir'
          }
        }]);
      });
    };
  }
})();
"use strict";
'use strict';

(function () {
  angular.module('listPet').controller('ListPetCtrl', listPetController);

  listPetController.$inject = ['$stateParams', 'ListPetService'];
  function listPetController($stateParams, ListPetService) {
    var self = this;

    function getListPet() {
      ListPetService.getListPet(self.accountId).then(function (result) {
        self.listPet = result;
      });
    }

    function init() {
      self.accountId = $stateParams.accountId;
      getListPet();
    }

    init();
  }
})();
'use strict';

(function () {
  angular.module('listPet').service('ListPetService', listPetService);

  listPetService.$inject = ['$q'];
  function listPetService($q) {
    var self = this;

    self.getListPet = function (accountId) {
      return $q(function (resolve, reject) {
        return resolve([{
          accountId: accountId,
          id: 1,
          photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
          pet: {
            type: 'chien',
            name: 'toutou',
            race: 'bichon',
            color: 'blanc'
          }
        }, {
          accountId: accountId,
          id: 2,
          photo: 'http://previews.123rf.com/images/bartkowski/bartkowski1203/bartkowski120300005/12612383-Noir-petit-chaton-assis-un-sur-un-fond-blanc-Banque-d\'images.jpg',
          pet: {
            type: 'chat',
            name: 'chaton',
            race: '',
            color: 'noir'
          }
        }]);
      });
    };
  }
})();
"use strict";
//# sourceMappingURL=bundle.js.map
