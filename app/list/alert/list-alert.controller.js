(() => {
  angular
    .module('listAlert')
    .controller('ListAlertCtrl', listAlertController);

  listAlertController.$inject = ['AlertService', 'AccountService'];
  function listAlertController(AlertService, AccountService) {
    let self = this;

    self.delete = function (item) {
      AlertService.delete(item._id);
    };

    self.update = function (item) {
      AlertService.update(item);
    };

    function getListAlert() {
      self.loaders.getList = true;
      AlertService.getListAlert()
        .then(function (results) {
          results.forEach((result) => {
            if (result.state === 'Perdu') {
              result.class = "assertive";
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

    function getAccountId() {
      self.userId = AccountService.getAccountId();
    }

    function init() {
      self.loaders = {getList: true};
      getAccountId();
      getListAlert();
    }

    init();
  }

})();
