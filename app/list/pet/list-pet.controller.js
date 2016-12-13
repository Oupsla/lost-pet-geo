(() => {
  angular
    .module('listPet')
    .controller('ListPetCtrl', listPetController);

  listPetController.$inject = ['$stateParams', 'PetService', '$state', '$ionicPopup'];
  function listPetController($stateParams, PetService, $state, $ionicPopup) {
    let self = this;

    function getListPet() {
      self.listPet = [];
      self.loaders.getList = true;
      return PetService.getListPet(self.userId).then(function (result) {
        self.listPet = result;
      }).finally(function () {
        self.loaders.getList = false;
      });
    }

    function getSpecies(id) {
      self.loaders.species = true;

      PetService.getSpecies(id).then(function (result) {
        self.species = result;
      }).finally(function () {
        self.loaders.species = false;
      });
    }

    self.delete = function (id) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Supprimer l\'animal',
        template: 'Êtes-vous sur de vouloir supprimer l\'animal ?'
      });
      confirmPopup.then(function (res) {
        if (res) {
          PetService.deletePet(id).then(function () {
            reset();
          });
        } else {
        }
      });
    };

    self.refresh  = function() {
      getListPet().finally(() => $scope.$broadcast('scroll.refreshComplete'));
    };

    function reset() {
      getListPet();
    }

    function init() {
      self.loaders = {getList: true};
      self.userId = $stateParams.userId;
      self.userId = '584532c4926c47001d9209bb';
      getListPet();
    }

    init();
  }
})();
