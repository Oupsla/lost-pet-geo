(() => {
  angular
    .module('alert')
    .service('AlertService', alertService);

  alertService.$inject = ['$q'];
  function alertService($q) {
    var self = this;

    self.getAlert = function (id) {

      return $q((resolve, reject) => {
        return resolve({
          id: id,
          state: 'Perdu',
          photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
          date: '10-08-2016',
          comment: "J'ai perdu mon chien ... :",
          pet: {
            details: {
              type: 'chien',
              name: 'toutou',
              race: 'bichon',
              color: 'blanc'
            }
            /*vaccins: {
             rage: 'ok'
             }*/
          }
        });
      });
    }
  }
})();
