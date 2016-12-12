(() => {
  angular
    .module('listAlert')
    .controller('ListAlertCtrl', listAlertController);

  listAlertController.$inject = ['AlertService', 'AccountService', '$state', '$ionicPopup'];
  function listAlertController(AlertService, AccountService, $state, $ionicPopup) {
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
      AlertService.getListAlert().then(function (results) {

        if (results.length) {
          for (var index in results) {
            var result = results[index];

            if (result.state === 'Perdu') {
              result.class = 'ion-android-warning';
            }
            else {
              result.class = 'ion-checkmark-circled';
            }

            if (result.userId === self.userId) {
              result.isMyAlert = true;
            }
          }
        }

        self.listAlert = results;
      }).finally(function () {
        self.loaders.getList = false;
      });
    }

    function getAccountId() {
      self.userId = AccountService.getAccountId();
    }

    function reset() {
      getListAlert();
    }

    function init() {
      self.loaders = {getList: true};
      getAccountId();
      reset();
    }

    init();
  }

})();
