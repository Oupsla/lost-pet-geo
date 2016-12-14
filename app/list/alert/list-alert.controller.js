(() => {
  angular
    .module('listAlert')
    .controller('ListAlertCtrl', listAlertController);

  listAlertController.$inject = ['AlertService', 'AccountService', '$state', '$ionicPopup', '$scope', 'PetService'];
  function listAlertController(AlertService, AccountService, $state, $ionicPopup, $scope, PetService) {
    let self = this;

    self.delete = function (item) {

      var confirmPopup = $ionicPopup.confirm({
        title: 'Supprimer l\'annonce',
        template: 'Êtes-vous sur de vouloir supprimer l\'annonce ?'
      });

      confirmPopup.then(function (res) {
        if (res) {
          AlertService.delete(item._id).then(function () {
            reset();
          });
        } else {
        }
      });
    };

    function getListAlert() {
      self.loaders.getList = true;
      self.listAlert = {};
      return AlertService.getListAlert()
        .then(function (results) {
          results.forEach((result) => {
            if (result.state === 'Perdu') {
              result.class = 'ion-android-warning';
            }
            else {
              result.class = 'ion-checkmark-circled';
            }

            if (result.userId === self.userId) {
              result.isMyAlert = true;
            }
          });

          self.listAlert = results;
      }).finally(function () {
        self.loaders.getList = false;
      });

    }

    self.refresh  = function() {
      getListAlert().finally(() => $scope.$broadcast('scroll.refreshComplete'));
    };

    function getAccountId() {
      self.userId = AccountService.getAccountId();
    }

    function reset() {
      self.refresh();
    }

    function init() {
      self.images = PetService.getImages();

      self.loaders = {getList: true};
      getAccountId();
      reset();
    }

    init();
  }

})();
