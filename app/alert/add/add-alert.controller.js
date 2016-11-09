(() => {
  'use strict';

  angular
    .module('addAlert')
    .controller('AddAlertCtrl', addAlertController);

  addAlertController.$inject = ['AddAlertService',  '$ionicPlatform', '$q', '$ionicLoading', '$timeout'];

  function addAlertController(AddAlertService, $ionicPlatform, $q, $ionicLoading, $timeout) {
    let self = this;

    function addAlert() {
      $ionicLoading.show({
        template: '<ion-spinner></ion-spinner>'
      });
      AddAlertService.addAlert(self.alert).then(function (result) {
        console.log(result);
      }).finally(function () {
        $timeout(function () {
          $ionicLoading.hide();
        }, 1000);
      });
    }

    self.addImage = function () {
      $ionicPlatform.ready(function () {
        // to avoid freeze if the location i to long
        $ionicLoading.show({
          template: '<ion-spinner></ion-spinner>'
        });

        // Get picture (promise)
        var deferCamera = $q.defer();
        if(! window.cordova) {
          $timeout(function () {
            $ionicLoading.hide();
          }, 1000);
        }
        else {
          navigator.camera.getPicture(function (imageURI) {
            deferCamera.resolve(imageURI);
          }, function (err) {
            deferCamera.reject(err);
          }, {
            // base64 image
            destinationType: Camera.DestinationType.DATA_URL
          });
          // deferCamera.resolve("img/canape.jpg");

          // Get location (promise)

          // Wait for all promises and build bulk object
          $q.all([deferCamera.promise])
            .then(function (data) {
              //  $ionicPopup.alert({
              //   title: 'Picture',
              //   template: data[0]
              // });

              if (!data[0]) {
                self.modal.hide();
                return;
              }

              // alert(data[0]);
              self.pet.picture = data[0];

            }, function (err) {
              $ionicLoading.hide();
            })
            .finally(function () {
              $timeout(function () {
                $ionicLoading.hide();
              }, 1000);
            });
        }
      });
    };
  }
})();
