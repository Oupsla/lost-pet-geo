(() => {
  'use strict';

  angular
    .module('addAlert')
    .controller('AddAlertCtrl', addAlertController);

  addAlertController.$inject = ['$stateParams', 'AlertService', '$ionicPlatform', '$ionicLoading', '$timeout', '$ionicActionSheet', 'PetService', 'AccountService'];

  function addAlertController($stateParams, AlertService, $ionicPlatform, $ionicLoading, $timeout, $ionicActionSheet, PetService, AccountService) {
    let self = this;
    self.myPetId = $stateParams.petId;

    function getSpecies() {
      self.loaders.species = true;
      self.species = [];
      PetService.getSpecies().then(function (result) {
        self.species = result;
      }).finally(function () {
        self.loaders.species = false;
      });
    }

    self.getBreeds = function () {
      self.loaders.breeds = true;
      if (!self.breeds[self.alert.pet.species._id]) {
        PetService.getBreeds(self.alert.pet.species._id).then(function (result) {
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
      self.alert.pet.photo = 'data:image/jpeg;base64,' + imageData;
      hideIonicLoading();
    }

    function capturePhoto() {
      showIonicLoading();
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
        destinationType: self.destinationType.DATA_URL
      });
    }

    function getPhoto(source) {
      showIonicLoading();
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
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

    function reset() {
      self.loaders = {};
      self.breeds = {};
      self.species = [];
      self.alert = {userId: self.userId, pet: {}};
      self.myPetId = $stateParams.petId;
      if (self.myPetId) {
        PetService.getPet(self.myPetId).then(function (result) {
          self.alert.pet = result;
          getSpecies();
          self.getBreeds();
        });
      }
      else {
        getSpecies();
      }
    }

    function init() {
      getAccountId();
      document.addEventListener('deviceready', onDeviceReady, false);
      reset();
    }

    init();
  }
})();
