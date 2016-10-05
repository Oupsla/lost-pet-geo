(() => {
  angular
    .module('listPet')
    .controller('ListPetCtrl', listPetController);

  listPetController.$inject = ['$scope','$stateParams', 'ListPetService'];
  function listPetController($scope, $stateParams, ListPetService) {
    var self = this;

    function getListPet() {
      ListPetService.getListPet(self.accountId).then(function(result) {
       self.listPet = result;
       });
    }

    function init() {
      self.accountId = $stateParams.accountId;
      getListPet();
    }

    init();
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
    });
  }
})();
