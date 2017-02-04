(() => {
  'use strict';

  angular
    .module('addAlert')
    .controller('AddAlertCtrl', addAlertController);

  addAlertController.$inject = ['$stateParams', 'AlertService', '$ionicPlatform', '$ionicLoading', '$timeout', '$ionicActionSheet', 'PetService', 'AccountService', '$state'];

  function addAlertController($stateParams, AlertService, $ionicPlatform, $ionicLoading, $timeout, $ionicActionSheet, PetService, AccountService, $state) {
    var self = this;
    self.myPetId = $stateParams.petId;

    self.stopSelectPosition = function () {
      self.selectPosition = false;
    };

    self.setLocalisation = function (pos) {
      if (self.map) {
        if (!pos) {
          try {
            var streetView = self.map.getStreetView();
            if (streetView.getVisible()) {
              pos = streetView.getPosition();
            }
          }
          catch(e) {
            console.log(e, 28);
            pos = self.map.getCenter();
          }
        }

        self.map.setCenter(pos);

        setMarker(pos);
      }
    };

    function setMarker(pos) {
      if (self.marker) {
        self.marker.setPosition(pos);
      }
      else {
        try {
          self.map.addMarker({
            position: {lat: pos.latitude, lng: pos.longitude},
            title: "Je l'ai perdu ici \n",
            snippet: "Je l'ai perdu ici",
            draggable: true,
            animation: plugin.google.maps.Animation.BOUNCE
          }, function (marker) {
            self.marker = marker;
            self.marker.addListener('ondrag', drag);

            // Show the info window
            self.marker.showInfoWindow();

            // Catch the click event
            self.marker.on(plugin.google.maps.event.INFO_CLICK, function () {

              // To do something...
              alert("Hello world!");

            });
          });
        }
        catch (error) {
          console.log(error, 68);

          self.marker = new google.maps.Marker({
            position: pos,
            map: self.map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            title: "Je l'ai perdu ici"
          });

          google.maps.event.addListener(self.marker, 'dragend', function (event) {
            self.setLocalisation(new google.maps.LatLng(this.position.lat(), this.position.lng()));
          });
        }
      }
    }

    self.hideMap = function () {
      self.showedMap = false;
    };

    self.initMap = function () {
      showIonicLoading();
      var div = document.getElementById('map');
      try {
        self.map = plugin.google.maps.Map.getMap(div);
        self.map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
      }
      catch (error) {
        console.log(error, 97);

        var mapOptions = {
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        self.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        console.log(self.map);
        hideIonicLoading();
      }

    };

    self.showMap = function () {
      self.showedMap = true;
    };

    function onMapReady() {
      self.getLocalisation();
      hideIonicLoading();
    }

    self.geocodeAddress = function () {
      var request = {
        'address': self.address
      };

      try {
        plugin.google.maps.Geocoder.geocode(request, function (results) {
          if (results.length) {
            var result = results[0];
            var position = result.position;

            self.marker.setPosition(position);
          } else {
            alert("Not found");
          }
        });
      }
      catch (e) {
        console.log(e, 137);
        if (!self.geocoder) {
          self.geocoder = new google.maps.Geocoder();
        }
        self.geocoder.geocode(request, function (results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            var location = results[0].geometry.location;
            self.setLocalisation(location);
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
    };

    self.getLocalisation = function () {
      showIonicLoading();
      navigator.geolocation.getCurrentPosition(function (pos) {
        self.alert.position = {lat: pos.coords.latitude, lng: pos.coords.longitude};

        try {
          self.setLocalisation(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        catch (error) {
          console.log(error, 161);

        }
        hideIonicLoading();
      }, function (error) {
        hideIonicLoading();
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Vous n'avez pas autorisé l'accès à votre position");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Votre emplacement n'a pas pu être déterminé");
            break;
          case error.TIMEOUT:
            alert("Le service n'a pas répondu à temps");
            break;
          default:
            alert('Impossible de récupérer la localisation: ' + error.message);
            break;
        }
      }, {enableHighAccuracy: true});
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
            for (let index in result) {
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
      console.log("device ready");
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
      reset();
      getAccountId();
      document.addEventListener('deviceready', onDeviceReady, false);
    }

    init();
  }
})();
