(() => {
  'use strict';

  angular
    .module('updateAlert')
    .controller('UpdateAlertCtrl', updateAlertController);

  updateAlertController.$inject = ['AlertService', 'PetService', '$ionicPlatform', '$ionicLoading', '$timeout', '$ionicActionSheet', '$stateParams', '$state'];

  function updateAlertController(AlertService, PetService, $ionicPlatform, $ionicLoading, $timeout, $ionicActionSheet, $stateParams, $state) {
    let self = this;

    function getAlert() {
      self.loaders.getAlert = true;
      AlertService.getAlert(self.alertId).then(function (result) {
        result.date = new Date(result.date);
        self.alert = result;
        getSpecies(self.alert.pet.speciesId);
        self.getBreeds(self.alert.pet.breedId);
      }).finally(function () {
        self.loaders.getAlert = false;
      });
    }

    function getSpecies(id) {
      self.loaders.species = true;
      PetService.getSpecies().then(function (results) {
        if (id) {
          for (var index in results) {
            var result = results[index];
            if (result._id === id) {
              self.alert.pet.species = result;
            }
          }
        }
        self.species = results;
      }).finally(function () {
        self.loaders.species = false;
      });
    }

    self.getBreeds = function (id) {
      self.loaders.breeds = true;
      if (!self.breeds[self.alert.pet.species._id]) {
        PetService.getBreeds(self.alert.pet.species._id).then(function (results) {
          if (id) {
            for (var index in results) {
              var result = results[index];
              if (result._id === id) {
                self.alert.pet.breed = result;
              }
            }
          }
          self.breeds[self.alert.pet.species._id] = results;

        }).finally(function () {
          self.loaders.breeds = false;
        });
      }
    };

    self.updateAlert = function () {
      showIonicLoading();
      AlertService.updateAlert(self.alert).then(function (result) {
        $state.go('nav.listAlert');
      }).finally(function () {
        hideIonicLoading();
      });
    };

    function updateImage() {
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
            return updateImage();
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

    function init() {
      self.states = ['Perdu', 'Trouvé'];
      self.loaders = {getAlert: false};
      self.breeds = {};
      self.species = [];
      self.alertId = $stateParams.alertId;
      self.alert = {};
      document.addEventListener('deviceready', onDeviceReady, false);
      getAlert();
    }

    init();
  }
})();
