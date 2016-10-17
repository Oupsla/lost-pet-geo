(() => {
  'use strict';

  angular
    .module('addPet')
    .controller('AddPetCtrl', addPetController);

  addPetController.$inject = ['PetService'];

  function addPetController(PetService) {
    let self = this;

    console.log("AddPetCtrl", this);

    function addPet() {
      PetService.addPet(self.pet).then(function (result) {
        console.log(result);
      });

      self.addImage = function () {
        // 2
        var options = {
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
          allowEdit: false,
          encodingType: Camera.EncodingType.JPEG,
          popoverOptions: CameraPopoverOptions,
        };

        // 3
        $cordovaCamera.getPicture(options).then(function (imageData) {

          // 4
          onImageSuccess(imageData);

          function onImageSuccess(fileURI) {
            createFileEntry(fileURI);
          }

          function createFileEntry(fileURI) {
            window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
          }

          // 5
          function copyFile(fileEntry) {
            var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
            var newName = makeid() + name;

            window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (fileSystem2) {
                fileEntry.copyTo(
                  fileSystem2,
                  newName,
                  onCopySuccess,
                  fail
                );
              },
              fail);
          }

          // 6
          function onCopySuccess(entry) {
            $scope.$apply(function () {
              $scope.images.push(entry.nativeURL);
            });
          }

          function fail(error) {
            console.log("fail: " + error.code);
          }

          function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
          }

        }, function (err) {
          console.log(err);
        });
      };

      self.urlForImage = function (imageName) {
        var name = imageName.substr(imageName.lastIndexOf('/') + 1);
        var trueOrigin = cordova.file.dataDirectory + name;
        return trueOrigin;
      };

      function init() {
        self.images = [];
        self.pet = {};
      }


      init();
    }
  }
})();
