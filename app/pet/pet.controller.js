(() => {
  angular
    .module('pet')
    .controller('PetCtrl', alertController);

  alertController.$inject = ['$stateParams'];
  function alertController($stateParams) {
    var self = this;

    function getAlert(id) {
      /*
       wsAlert.getAlert(id).then(function(result) {
       self.alert = result;
       });
       * */
      self.pet = {
        id: id,
        type: 'chien',
        photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
        name: 'toutou',
        race: 'bichon',
        color: 'blanc'
        /*vaccins: {
         rage: 'ok'
         }*/
      };
    }

    function init() {
      getAlert($stateParams.petId);
    }

    init();
  }
})();
