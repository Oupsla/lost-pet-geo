(() => {
  angular
    .module('alert')
    .controller('AlertCtrl', alertController);

  alertController.$inject = ['$stateParams'];
  function alertController($stateParams) {
    var self = this;

    function getAlert(id){
      /*
      wsAlert.getAlert(id).then(function(result) {
        self.alert = result;
      });
      * */
      self.alert = {
        id: id,
        state: 'Perdu',
        photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
        date: '10-08-2016',
        comment: "J'ai perdu mon chien ... :",
        pet: {
          type: 'chien',
          name: 'toutou',
          race: 'bichon',
          color: 'blanc',
        }
      };
    }

    function init() {
      getAlert($stateParams.alertId);
    }

    init();

    console.log(self.alert);
  }
})();
