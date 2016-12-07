(() => {
  angular
    .module('listAlert')
    .controller('ListAlertCtrl', listAlertController);

  listAlertController.$inject = ['AlertService', 'AccountService'];
  function listAlertController(AlertService, AccountService) {
    let self = this;

    self.delete = function (item) {
      console.log("delete " + item);
      AlertService.delete(item._id);
    };

    self.update = function (item) {
      console.log("update " + item);
      AlertService.update(item);
    };

    function getListAlert() {
      self.loaders.getList = true;
      AlertService.getListAlert().then(function (result) {
        for (var index in result) {
          if (result[index].userId === self.userId) {
            result[index].isMyAlert = true;
          }
        }
        self.listAlert = result;
      }).finally(function () {
        self.loaders.getList = false;
      });
    }

    function getAccountId() {
      self.userId = AccountService.getAccountId();
    }

    function init() {
      self.loaders = {getList: false};
      getAccountId();
      getListAlert();
    }

    init();
  }

})();
