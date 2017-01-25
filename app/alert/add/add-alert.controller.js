(() => {
  'use strict';

  angular
    .module('addAlert')
    .controller('AddAlertCtrl', addAlertController);

  addAlertController.$inject = ['$scope', '$stateParams', 'AlertService', '$ionicPlatform', '$ionicLoading', '$timeout', '$ionicActionSheet', 'PetService', 'AccountService', '$state', '$compile'];

  function addAlertController($scope, $stateParams, AlertService, $ionicPlatform, $ionicLoading, $timeout, $ionicActionSheet, PetService, AccountService, $state, $compile) {
    let self = this;
    self.myPetId = $stateParams.petId;

    self.stopSelectPosition = function () {
      self.selectPosition = false;
    };

    self.setLocalisation = function (pos) {
      if (!pos) {
        var streetView = self.map.getStreetView();
        if (streetView.getVisible()) {
          pos = streetView.getPosition();
        }
        else {
          pos = self.map.getCenter();
        }
      }
      self.map.setCenter(pos);

      setMarker(pos);

      self.alert.lat = pos.latitude;
      self.alert.lng = pos.longitude;
    };

    function setMarker(pos) {
      if (self.marker) {
        self.marker.setPosition(pos);
      }
      else {
        self.marker = new google.maps.Marker({
          position: pos,
          map: self.map,
          animation: google.maps.Animation.DROP,
          title: "Je l'ai perdu ici"
        });
      }
    }

    self.hideMap = function () {
      self.showedMap = false;
    };

    self.showMap = function () {
      if (!self.map) {
        var mapOptions = {
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        self.map = new google.maps.Map(document.getElementById("map"),
          mapOptions);

        self.geocoder = new google.maps.Geocoder();

        self.getLocalisation();
      }

      self.showedMap = true;
    };

    self.geocodeAddress = function () {
      self.geocoder.geocode({'address': self.address}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var location = results[0].geometry.location;
          self.setLocalisation(location);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    };

    self.getLocalisation = function () {
      navigator.geolocation.getCurrentPosition(function (pos) {
        self.showMap();
        var myLatlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        self.setLocalisation(myLatlng);
      }, function (error) {
        alert('Unable to get location: ' + error.message);
      });
    };


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
      self.alert.photo = 'data:image/png;base64,' + imageData;
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
      self.showedMap = false;
      self.images = PetService.getImages();
      self.address = 'Paris';
      self.states = ['Perdu', 'Trouvé'];
      getAccountId();
      reset();
      document.addEventListener('deviceready', onDeviceReady, false);

    }

    init();
  }
})();
