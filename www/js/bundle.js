'use strict';

(function () {
  angular.module('lostpetgeo', ['ionic', 'auth', 'navs', 'alert', 'listAlert', 'addAlert', 'pet', 'listPet', 'addPet', 'account', 'accountUpdate']);
})();
'use strict';

(function () {
  'use strict';

  angular.module('account', []);
})();
'use strict';

(function () {
  angular.module('alert', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('auth', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('navs', []);
})();
'use strict';

(function () {
  angular.module('pet', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('accountUpdate', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('addAlert', []);
})();
'use strict';

(function () {
  angular.module('listPet', []);
})();
'use strict';

(function () {
  angular.module('listAlert', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('addPet', []);
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
'use strict';

(function () {
  'use strict';

  angular.module('account').config(configAccount);

  configAccount.$inject = ['$stateProvider'];

  function configAccount($stateProvider) {
    $stateProvider.state('nav.account', {
      url: '/account',
      views: {
        'menuContent': {
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
  angular.module('alert').config(configAlert);

  configAlert.$inject = ['$stateProvider'];
  function configAlert($stateProvider) {
    $stateProvider.state('nav.alert', {
      url: '/alert/:alertId',
      views: {
        'menuContent': {
          templateUrl: 'alert/alert.html',
          controller: 'AlertCtrl',
          controllerAs: 'AlertCtrl'
        }
      }
    });
  }
})();
'use strict';

(function () {
  angular.module('auth').config(configAuth);

  configAuth.$inject = ['$httpProvider'];
  function configAuth($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  }
})();
'use strict';

(function () {
  angular.module('pet').config(configAlert);

  configAlert.$inject = ['$stateProvider'];
  function configAlert($stateProvider) {
    $stateProvider.state('nav.pet', {
      url: '/pet/:petId',
      views: {
        'menuContent': {
          templateUrl: 'pet/pet.html',
          controller: 'PetCtrl',
          controllerAs: 'PetCtrl'
        }
      }
    });
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('accountUpdate').config(configAccountUpdate);

  configAccountUpdate.$inject = ['$stateProvider'];

  function configAccountUpdate($stateProvider) {
    $stateProvider.state('nav.accountUpdate', {
      url: '/accountUpdate/:accountId',
      views: {
        'menuContent': {
          templateUrl: 'account/update/account-update.html',
          controller: 'AccountUpdateCtrl',
          controllerAs: 'AccountUpdateCtrl'
        }
      }
    });
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('addAlert').config(configAddAlert);

  configAddAlert.$inject = ['$stateProvider'];

  function configAddAlert($stateProvider) {
    $stateProvider.state('nav.addAlert', {
      url: '/alert/add',
      views: {
        'menuContent': {
          templateUrl: 'alert/add/add-alert.html',
          controller: 'AddAlertCtrl',
          controllerAs: 'AddAlertCtrl'
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
    $stateProvider.state('nav.listPet', {
      url: '/listPet',
      views: {
        'menuContent': {
          templateUrl: 'list/pet/list-pet.html',
          controller: 'ListPetCtrl',
          controllerAs: 'ListPetCtrl'
        }
      }
    });
  }
})();
'use strict';

(function () {
  angular.module('listAlert').config(configListAlert);

  configListAlert.$inject = ['$stateProvider'];
  function configListAlert($stateProvider) {
    $stateProvider.state('nav.listAlert', {
      url: '/listAlert',
      views: {
        'menuContent': {
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
  'use strict';

  angular.module('addPet').config(configAddPet);

  configAddPet.$inject = ['$stateProvider'];

  function configAddPet($stateProvider) {
    $stateProvider.state('nav.addPet', {
      url: '/pet/add',
      views: {
        'menuContent': {
          templateUrl: 'pet/add/add-pet.html',
          controller: 'AddPetCtrl',
          controllerAs: 'AddPetCtrl'
        }
      }
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

  accountController.$inject = ['AccountService'];

  function accountController(AccountService) {
    var self = this;

    function getAccount() {
      AccountService.getAccount(self.account.id).then(function (result) {
        self.account = result;
      });
    }

    function init() {
      self.account = {
        id: "5807394d416656001d4012e7"
      };

      getAccount();
      self.today = new Date();
    }

    init();
  }
})();
'use strict';

(function () {
  angular.module('account').service('AccountService', accountService);

  accountService.$inject = ['$q', '$http'];
  function accountService($q, $http) {
    var self = this;

    self.getAccount = function (id) {
      return $http.get("http://lostpet-api.mybluemix.net/api/v1.0/users/" + id).then(function (resp) {
        return resp.data;
      });
    };

    self.updateAccount = function (account) {
      return $http.post("http://lostpet-api.mybluemix.net/api/v1.0/users/", {
        account: account
      }).then(function (resp) {
        return resp.data;
      });
    };
  }
})();
"use strict";
'use strict';

(function () {
  angular.module('alert').controller('AlertCtrl', alertController);

  alertController.$inject = ['$scope', '$stateParams', 'AlertService'];
  function alertController($scope, $stateParams, AlertService) {
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
  'use strict';

  angular.module('auth').factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', '$injector'];
  function authInterceptor($rootScope, $q, $injector) {
    return {
      responseError: function responseError(rejection) {
        var defered = $q.defer();

        if (rejection.status === 401 || rejection.status === 403) {
          $rootScope.$broadcast('unlogged');
          $rootScope.$on('LOGIN_SUCCESS', function () {
            var $http = $injector.get('$http');
            return $http(rejection.config).then(function (data) {
              defered.resolve(data);

              return data;
            });
          });
          $rootScope.$on('LOGIN_ERROR', function () {
            return defered.reject();
          });
        }

        return defered.promise;
      }
    };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('navs').controller('NavsCtrl', navController);

  navController.$inject = ['$scope', '$state', 'AccountService'];

  function navController($scope, $state, AccountService) {
    var self = this;

    self.getAccount = function () {
      AccountService.getAccount(self.nav.id).then(function (result) {
        result.firstName = 'Benjamin';
        result.lastName = 'Coenen';
        result.photo = 'http://www.freeiconspng.com/uploads/account-profile-icon-1.png';
        self.account = result;
      });
    };

    self.disconnect = function () {
      console.log('disconnect');
    };

    function init() {
      self.nav = {
        id: '5807394d416656001d4012e7'
      };

      self.getAccount();
      self.today = new Date();
    }

    $scope.$on('unlogged', function () {
      return $state.go('login');
    });

    init();
  }
})();
'use strict';

(function () {
  angular.module('pet').controller('PetCtrl', alertController);

  alertController.$inject = ['$stateParams', 'PetService'];
  function alertController($stateParams, PetService) {
    var self = this;

    function getPet(id) {
      PetService.getPet(id).then(function (result) {
        self.pet = result;
        console.log(result);
      });
    }

    function init() {
      getPet($stateParams.petId);
    }

    init();
  }
})();
'use strict';

(function () {
  angular.module('pet').service('PetService', petService);

  petService.$inject = ['$q', '$http'];
  function petService($q, $http) {
    var self = this;

    self.getPet = function (id) {
      return $http.get("http://lostpet-api.mybluemix.net/api/v1.0/pets/" + id).then(function (resp) {
        return resp.data;
      });
    };
  }
})();
"use strict";
'use strict';

(function () {
  'use strict';

  angular.module('accountUpdate').controller('AccountUpdateCtrl', accountUpdateController);

  accountUpdateController.$inject = ['$state', '$stateParams', 'AccountService'];

  function accountUpdateController($state, $stateParams, AccountService) {
    var self = this;

    function getAccount() {
      AccountService.getAccount(self.account.id).then(function (result) {
        self.account = result;
      });
    }

    self.updateAccount = function () {
      AccountService.updateAccount(self.account).then(function () {
        $state.go('tab.account');
      });
    };

    function init() {
      self.account = {
        id: $stateParams.accountId
      };

      getAccount();
      self.today = new Date();
    }

    init();
  }
})();
"use strict";
'use strict';

(function () {
  'use strict';

  angular.module('addAlert').controller('AddAlertCtrl', addAlertController);

  addAlertController.$inject = ['AddAlertService'];

  function addAlertController(AddAlertService) {
    var self = this;

    function addAlert() {
      AddAlertService.addAlert(self.alert).then(function (result) {
        console.log(result);
      });
    }
  }
})();
'use strict';

(function () {
  angular.module('addAlert').service('AddAlertService', addAlertService);

  addAlertService.$inject = ['$q'];
  function addAlertService($q) {
    var self = this;

    self.addAlert = function (id) {
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
      self.accountId = "5807394d416656001d4012e7";
      getListPet();
    }

    init();
  }
})();
'use strict';

(function () {
  angular.module('listPet').service('ListPetService', listPetService);

  listPetService.$inject = ['$q', '$http'];
  function listPetService($q, $http) {
    var self = this;

    self.getListPet = function (accountId) {
      return $http.get("http://lostpet-api.mybluemix.net/api/v1.0/users/" + accountId + "/pets/") // + accountId)
      .then(function (resp) {
        return resp.data;
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
      self.loaders.getList = true;
      ListAlertService.getListAlert().then(function (result) {
        self.listAlert = result;
      }).finally(function () {
        self.loaders.getList = false;
      });
    }

    function init() {
      self.loaders = { getList: false };
      getListAlert();
    }

    init();
  }
})();
'use strict';

(function () {
  angular.module('listAlert').service('ListAlertService', listAlertService);

  listAlertService.$inject = ['$q', '$http'];
  function listAlertService($q, $http) {
    var self = this;

    self.getListAlert = function () {
      return $http.get("http://lostpet-api.mybluemix.net/api/v1.0/alerts/").then(function (resp) {
        return resp.data;
      });
    };
  }
})();
"use strict";
'use strict';

(function () {
  'use strict';

  angular.module('addPet').controller('AddPetCtrl', addPetController);

  addPetController.$inject = ['PetService'];

  function addPetController(PetService) {
    var self = this;

    console.log("AddPetCtrl", this);

    function addPet() {
      PetService.addPet(self.pet).then(function (result) {
        console.log(result);
      });

      self.addImage = function () {
        // 2
        var options = {
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
          allowEdit: false,
          encodingType: Camera.EncodingType.JPEG,
          popoverOptions: CameraPopoverOptions
        };

        // 3
        $cordovaCamera.getPicture(options).then(function (imageData) {

          // 4
          onImageSuccess(imageData);

          function onImageSuccess(fileURI) {
            createFileEntry(fileURI);
          }

          function createFileEntry(fileURI) {
            window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
          }

          // 5
          function copyFile(fileEntry) {
            var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
            var newName = makeid() + name;

            window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (fileSystem2) {
              fileEntry.copyTo(fileSystem2, newName, onCopySuccess, fail);
            }, fail);
          }

          // 6
          function onCopySuccess(entry) {
            $scope.$apply(function () {
              $scope.images.push(entry.nativeURL);
            });
          }

          function fail(error) {
            console.log("fail: " + error.code);
          }

          function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
          }
        }, function (err) {
          console.log(err);
        });
      };

      self.urlForImage = function (imageName) {
        var name = imageName.substr(imageName.lastIndexOf('/') + 1);
        var trueOrigin = cordova.file.dataDirectory + name;
        return trueOrigin;
      };

      function init() {
        self.images = [];
        self.pet = {};
      }

      init();
    }
  }
})();
'use strict';

(function () {
  angular.module('addPet').service('AddPetService', addPetService);

  addPetService.$inject = ['$q'];
  function addPetService($q) {
    var self = this;
    self.addPet = function (id) {
      return $q(function (resolve, reject) {
        return resolve({
          id: id,
          type: 'chien',
          photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
          name: 'toutou',
          race: 'bichon',
          color: 'blanc',
          particularity: 'Bla bla bla'
          /*vaccins: {
           rage: 'ok'
           }*/
        });
      });
    };
  }
})();
"use strict";
//# sourceMappingURL=bundle.js.map
