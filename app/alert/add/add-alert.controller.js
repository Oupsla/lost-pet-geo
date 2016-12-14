(() => {
  'use strict';

  angular
    .module('addAlert')
    .controller('AddAlertCtrl', addAlertController);

  addAlertController.$inject = ['$stateParams', 'AlertService', '$ionicPlatform', '$ionicLoading', '$timeout', '$ionicActionSheet', 'PetService', 'AccountService', '$state'];

  function addAlertController($stateParams, AlertService, $ionicPlatform, $ionicLoading, $timeout, $ionicActionSheet, PetService, AccountService, $state) {
    let self = this;
    self.myPetId = $stateParams.petId;

    function getSpecies(id) {
      self.loaders.species = true;
      self.species = [];
      PetService.getSpecies().then(function (result) {
        angular.forEach(result, function (species) {
          species.image = self.images[species.name];
          if (id) {
            if (species._id === id) {
              self.alert.pet.species = species;
            }
          }
        });

        self.species = result;
      }).finally(function () {
        self.loaders.species = false;
      });
    }

    self.getBreeds = function (id) {
      if (!self.breeds[self.alert.pet.species._id]) {
        self.loaders.breeds = true;
        PetService.getBreeds(self.alert.pet.species._id).then(function (result) {
          if (id) {
            for (var index in result) {
              if (result[index]._id === id) {
                self.alert.pet.breed = result[index];
              }
            }
          }
          self.breeds[self.alert.pet.species._id] = result;
        }).finally(function () {
          self.loaders.breeds = false;
        });
      }
    };

    self.addAlert = function () {
      showIonicLoading();
      self.alert.breedId = self.alert.pet.breed._id;
      self.alert.speciesId = self.alert.pet.species._id;
      AlertService.addAlert(self.alert).then(function (result) {
        reset();
        $state.go('nav.listAlert');
      }).finally(function () {
        hideIonicLoading();
      });
    };

    function addImage() {
      $ionicPlatform.ready(function () {
        if (window.cordova) {
          capturePhoto();
        }
      });
      return true;
    }

    function importPhoto() {
      $ionicPlatform.ready(function () {
        if (window.cordova) {
          var source = self.pictureSource.PHOTOLIBRARY;
          getPhoto(source);
        }
      });
      return true;
    }

    function showIonicLoading() {
      $ionicLoading.show({
        template: '<ion-spinner></ion-spinner>'
      });
    }

    function hideIonicLoading() {
      $timeout(function () {
        $ionicLoading.hide();
      }, 500);
    }


    function onDeviceReady() {
      self.pictureSource = navigator.camera.PictureSourceType;
      self.destinationType = navigator.camera.DestinationType;
    }

    function onPhotoDataSuccess(imageData) {
     self.alert.photo = 'data:image/jpeg;base64,' + imageData;
//      self.alert.photo = 'data:image/jpeg;base64,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';
      hideIonicLoading();
    }

    function capturePhoto() {
      showIonicLoading();
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 20,
        destinationType: self.destinationType.DATA_URL
      });
    }

    function getPhoto(source) {
      showIonicLoading();
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 20,
        destinationType: self.destinationType.DATA_URL,
        sourceType: source
      });
    }

    function deletePicture() {
      self.alert.pet.photo = '';
      return true;
    }

    self.takePhoto = function () {
      var opts = {
        buttons: [
          {text: 'Prendre une photo'},
          {text: 'Photo de la librairie'}
        ],
        titleText: 'Photo',
        cancelText: 'Annuler',
        cancel: function () {
          return true;
        },
        buttonClicked: function (index) {
          if (index === 0) {
            return addImage();
          }

          if (index === 1) {
            return importPhoto();
          }

          return true;
        }
      };
      if (self.alert.pet.photo) {
        opts.destructiveText = 'Supprimer';
        opts.destructiveButtonClicked = deletePicture;
      }

      $ionicActionSheet.show(opts);
    };

    function onFail() {
      hideIonicLoading();
    }

    function getAccountId() {
      self.userId = AccountService.getAccountId();
    }

    function getPet() {
      self.loaders.getPet = true;
      PetService.getPet(self.myPetId).then(function (result) {
        self.alert.pet = result;
        self.alert.state = 'Perdu';
        if (self.alert.pet.photos.length) {
          self.alert.photo = self.alert.pet.photos[0];
        }
        getSpecies(self.alert.pet.speciesId);
        self.getBreeds(self.alert.pet.breedId);
      }).finally(() => self.loaders.getPet = false);
    }

    function reset() {
      self.loaders = {getPet: true};
      self.breeds = {};
      self.species = [];
      self.alert = {userId: self.userId, pet: {}};
      self.myPetId = $stateParams.petId;
      if (self.myPetId) {
        getPet();
      }
      else {
        self.loaders.getPet = false;
        getSpecies();
      }
    }

    function init() {
      self.images = PetService.getImages();

      self.states = ['Perdu', 'Trouvé'];
      getAccountId();
      reset();
      document.addEventListener('deviceready', onDeviceReady, false);

    }

    init();
  }
})();
