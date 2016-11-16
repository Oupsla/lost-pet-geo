(() => {
  'use strict';

  angular
    .module('addAlert')
    .controller('AddAlertCtrl', addAlertController);

  addAlertController.$inject = ['AddAlertService', '$ionicPlatform', '$q', '$ionicLoading', '$timeout', '$ionicPopup'];

  function addAlertController(AddAlertService, $ionicPlatform, $q, $ionicLoading, $timeout, $ionicPopup) {
    let self = this;

    function getSpecies() {
      console.log("getSpecies");
      self.loaders.species = true;

      AddAlertService.getSpecies().then(function (result) {
        self.species = result;
        console.log(self.species);

      }).finally(function () {
        self.loaders.species = false;
      });
    }

    self.getBreeds = function () {
      console.log("getBreeds");
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

    self.addImage = function () {
      /*
       $ionicPlatform.ready(function () {
       // to avoid freeze if the location i to long
       $ionicLoading.show({
       template: '<ion-spinner></ion-spinner>'
       });

       // Get picture (promise)
       var cameraPromise = $q.reject();
       if (!window.cordova) {
       $timeout(function () {
       $ionicLoading.hide();
       }, 1000);
       }
       else {
       navigator.camera.getPicture(onSuccess, onFail, {
       quality: 50,
       destinationType: Camera.DestinationType.FILE_URI
       });
       }
       })*/
      $ionicPlatform.ready(function () {
        if (window.cordova) {
          showIonicLoading();
          navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI
          });
        }
      });
    };

    function onSuccess(imageURI) {
      if (imageURI) {
        $ionicPopup.alert({
          title: 'Picture',
          template: imageURI
        });
        self.pet.photo = imageURI;
      }

      hideIonicLoading();
    }

    function onFail(message) {
      alert('Failed because: ' + message);
      hideIonicLoading()
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

    function init() {
      self.loaders = {};
      self.breeds = {};
      self.species = [];
      getSpecies();
    }

    init();

  }
})();
