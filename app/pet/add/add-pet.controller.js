(() => {
  'use strict';

  angular
    .module('addPet')
    .controller('AddPetCtrl', addPetController);

  addPetController.$inject = ['PetService', '$ionicPlatform', '$ionicLoading', '$timeout', '$ionicActionSheet', 'AccountService', '$state'];

  function addPetController(PetService, $ionicPlatform, $ionicLoading, $timeout, $ionicActionSheet, AccountService, $state) {
    let self = this;

    function getSpecies() {
      self.loaders.species = true;
      self.species = [];
      PetService.getSpecies().then(function (result) {
        angular.forEach(result, function (species) {
            species.image = self.images[species.name];
          }
        );
        self.species = result;
      }).finally(function () {
        self.loaders.species = false;
      });
    }

    self.getBreeds = function () {
      self.loaders.breeds = true;
      if (!self.breeds[self.pet.species._id]) {
        PetService.getBreeds(self.pet.species._id).then(function (result) {
          self.breeds[self.pet.species._id] = result;
        }).finally(function () {
          self.loaders.breeds = false;
        });
      }
    };

    self.addPet = function () {
      showIonicLoading();
      self.pet.breedId = self.pet.breed._id;
      self.pet.speciesId = self.pet.species._id;
      PetService.addPet(self.pet).then(function (result) {
        $state.go("nav.listPet");
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
     self.pet.photos = 'data:image/jpeg;base64,' + imageData;
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
      self.pet.photos = '';
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
      if (self.pet.photos) {
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
      self.images = [];
      self.pet = {
        userId: self.userId
      };
      self.breeds = {};
      getSpecies();
    }

    function init() {
      getAccountId();
      reset();
      document.addEventListener('deviceready', onDeviceReady, false);
      self.images = PetService.getImages();
    }

    init();
  }
})
();
