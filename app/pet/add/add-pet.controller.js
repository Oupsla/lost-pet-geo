(() => {
    'use strict';

    angular
      .module('addPet')
      .controller('AddPetCtrl', addPetController);

    addPetController.$inject = ['AddPetService', '$ionicPlatform', '$q', '$ionicLoading', '$timeout'];

    function addPetController(AddPetService, $ionicPlatform, $q, $ionicLoading, $timeout) {
      let self = this;

      function getSpecies() {
        console.log("getSpecies");
        self.loaders.species = true;

        AddPetService.getSpecies().then(function (result) {
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
          AddPetService.getBreeds(self.pet.species).then(function (result) {
            self.breeds[result.specie] = result.breeds;
          }).finally(function () {
            self.loaders.breeds = false;
          });
        }
      };

      self.addPet = function () {
        $ionicLoading.show({
          template: '<ion-spinner></ion-spinner>'
        });

        console.log("add pet");
        AddPetService.addPet(self.pet).then(function (result) {
          console.log(result);
        }).finally(function () {
          $timeout(function () {
            $ionicLoading.hide();
          }, 1000);
        });
      };

      self.addImage = function () {
        $ionicPlatform.ready(function () {
          // to avoid freeze if the location i to long
          $ionicLoading.show({
            template: '<ion-spinner></ion-spinner>'
          });

          // Get picture (promise)
          var deferCamera = $q.defer();
          if (!window.cordova) {
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

      function init() {
        self.loaders = {};
        console.log("add pet ctrl");
        self.images = [];
        self.pet = {};
        self.breeds = {};
        self.species = [];
        getSpecies();
      }


      init();
    }
  })
();
