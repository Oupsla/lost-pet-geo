(() => {
  angular
    .module('listPet')
    .controller('ListPetCtrl', listPetController);

  listPetController.$inject = ['$stateParams'];
  function listPetController($stateParams) {
    var self = this;

    function getListPet() {
      /*
       wsPet.getListPet(self.accountId).then(function(result) {
       self.listPet = result;
       });
       * */

      self.listPet = [
        {
          accountId: 1,
          id: 1,
          photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
          pet: {
            type: 'chien',
            name: 'toutou',
            race: 'bichon',
            color: 'blanc',
          }
        },
        {
          accountId: 1,
          id: 2,
          photo: "http://previews.123rf.com/images/bartkowski/bartkowski1203/bartkowski120300005/12612383-Noir-petit-chaton-assis-un-sur-un-fond-blanc-Banque-d'images.jpg",
          pet: {
            type: 'chat',
            name: 'chaton',
            race: '',
            color: 'noir'
          }
        }
      ];
    }

    function init() {
      self.accountId = $stateParams.accountId;
      getListPet();
    }

    init();
  }
})();
