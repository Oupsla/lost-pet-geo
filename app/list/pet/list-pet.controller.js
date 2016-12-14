(() => {
  angular
    .module('listPet')
    .controller('ListPetCtrl', listPetController);

  listPetController.$inject = ['$stateParams', 'PetService', '$state', '$ionicPopup', '$scope', 'AccountService'];
  function listPetController($stateParams, PetService, $state, $ionicPopup, $scope, AccountService) {
    let self = this;

    function getListPet() {
      self.loaders.getList = true;
      self.listPet = [];
      getAccountId();
      console.log(self.userId);
      return PetService.getListPet(self.userId)
        .then(function (result) {
          self.listPet = result;
        })
        .finally(() => self.loaders.getList = false);
    }

    function getAccountId() {
      self.userId = AccountService.getAccountId();
    }

    function getSpecies(id) {
      self.loaders.species = true;

      return PetService.getSpecies(id)
        .then(function (result) {
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

      getListPet();
    }

    init();
  }
})();
