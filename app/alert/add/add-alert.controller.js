(() => {
  'use strict';

  angular
    .module('addAlert')
    .controller('AddAlertCtrl', addAlertController);

  addAlertController.$inject = ['$stateParams', 'AddAlertService', '$ionicPlatform', '$ionicLoading', '$timeout', '$ionicActionSheet'];

  function addAlertController($stateParams, AddAlertService, $ionicPlatform, $ionicLoading, $timeout, $ionicActionSheet) {

    let self = this;

    function getSpecies() {
      self.loaders.species = true;

      AddAlertService.getSpecies().then(function (result) {
        self.species = result;
      }).finally(function () {
        self.loaders.species = false;
      });
    }

    self.getBreeds = function () {
      self.loaders.breeds = true;
      if (!self.breeds[self.pet.species]) {
        AddAlertService.getBreeds(self.pet.species).then(function (result) {
          self.breeds[result.specie] = result.breeds;
        }).finally(function () {
          self.loaders.breeds = false;
        });
      }
    };

    function addAlert() {
      showIonicLoading();
      AddAlertService.addAlert(self.alert).then(function (result) {
        console.log(result);
      }).finally(function () {
        hideIonicLoading();
      });
    }

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
      self.pet.photo = "data:image/jpeg;base64," + imageData;
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
      self.pet.photo = "";
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
      if (self.pet.photo) {
        opts.destructiveText = "Supprimer";
        opts.destructiveButtonClicked = deletePicture;
      }

      $ionicActionSheet.show(opts);
    };

    function onFail() {
      hideIonicLoading();
    }

    function init() {
      self.myPetId = $stateParams.petId;
      PetService.getPet(self.myPetId).then(function(result){
        self.pet = result;
      });

      self.loaders = {};
      self.breeds = {};
      self.species = [];
      self.pet = {};
      document.addEventListener("deviceready", onDeviceReady, false);
      getSpecies();
    }

    init();
  }
})();
