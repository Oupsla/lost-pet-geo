'use strict';

(function () {
  angular.module('lostpetgeo', ['ionic', 'alert', 'listAlert', 'addAlert', 'pet', 'listPet', 'addPet', 'account', 'accountUpdate']);
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
  angular.module('listAlert', []);
})();
'use strict';

(function () {
  angular.module('listPet', []);
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
  'use strict';

  angular.module('accountUpdate').config(configAccountUpdate);

  configAccountUpdate.$inject = ['$stateProvider'];

  function configAccountUpdate($stateProvider) {
    $stateProvider.state('accountUpdate', {
      url: '/accountUpdate/:accountId',
      templateUrl: 'account/update/account-update.html',
      controller: 'AccountUpdateCtrl',
      controllerAs: 'AccountUpdateCtrl'
    });
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('addAlert').config(configAddAlert);

  configAddAlert.$inject = ['$stateProvider'];

  function configAddAlert($stateProvider) {
    $stateProvider.state('tab.addAlert', {
      url: '/alert/add',
      views: {
        'tab-addAlert': {
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
'use strict';

(function () {
  'use strict';

  angular.module('addPet').config(configAddPet);

  configAddPet.$inject = ['$stateProvider'];

  function configAddPet($stateProvider) {
    $stateProvider.state('addPet', {
      url: '/pet/add',
      templateUrl: 'pet/add/add-pet.html',
      controller: 'AddPetCtrl',
      controllerAs: 'AddPetCtrl'
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
        id: 3
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

  accountService.$inject = ['$q'];
  function accountService($q) {
    var self = this;

    self.getAccount = function (id) {
      return $q(function (resolve, reject) {
        return resolve({
          id: id,
          name: 'marine',
          firstName: 'bal',
          email: 'ooo-mama-ooo@hotmail.fr',
          phone: '0668557173',
          birthdate: new Date('17-04-1993'),
          address: {
            number: 314,
            street: 'rue truc',
            postalCode: 59100,
            city: 'roubaix',
            country: 'france'
          }
        });
      });
    };

    self.updateAccount = function (account) {
      return $q(function (resolve, reject) {
        return resolve({});
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
  angular.module('pet').controller('PetCtrl', alertController);

  alertController.$inject = ['$stateParams', 'PetService'];
  function alertController($stateParams, PetService) {
    var self = this;
    self.petId = $stateParams.petId;

    function getPet(id) {
      PetService.getPet(id).then(function (result) {
        self.pet = result;
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

  addAlertController.$inject = ['$stateParams', 'AddAlertService'];
  function addAlertController($stateParams, AddAlertService) {
    var self = this;

    function getAlert() {
      AddAlertService.getAlert(self.alert).then(function (result) {
        self.alert = result;
      });
    }

    function getMyPet(id) {
      AddAlertService.getMyPet(id).then(function (result) {
        self.pet = result;
      });
    }

    function addAlert() {
      AddAlertService.addAlert(self.alert).then(function (result) {
        console.log(result);
      });
    }

    function init() {
      self.myPetId = $stateParams.petId;
      console.log(self.petId);
      getMyPet(self.myPetId);
    }

    init();
  }
})();
'use strict';

(function () {
  angular.module('addAlert').service('AddAlertService', addAlertService);

  addAlertService.$inject = ['$q'];
  function addAlertService($q) {
    var self = this;
    self.getMyPet = function (id) {
      return $q(function (resolve, reject) {
        return resolve({
          id: id,
          photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
          name: 'loulou',
          race: 'bichon',
          type: 'chien',
          particularity: 'aggresif',
          color: 'noir'
        });
      });
    };

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
      console.log("List alert ");
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
