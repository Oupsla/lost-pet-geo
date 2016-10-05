(() => {
  angular
    .module('listAlert')
    .service('ListAlertService', listAlertService);

  listAlertService.$inject = ['$q'];
  function listAlertService($q) {
    var self = this;

    self.getListAlert = function () {
      return $q((resolve, reject) => {
        return resolve( [
          {
            id: 1,
            state: 'Perdu',
            date: '10-08-2016',
            photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
            pet: {
              type: 'chien',
              name: 'toutou',
              race: 'bichon',
              color: 'blanc',
            }
          },
          {
            id: 2,
            state: 'Perdu',
            date: '10-08-2016',
            photo: 'http://previews.123rf.com/images/bartkowski/bartkowski1203/bartkowski120300005/12612383-Noir-petit-chaton-assis-un-sur-un-fond-blanc-Banque-d\'images.jpg',
            pet: {
              type: 'chat',
              name: 'chaton',
              state: 'Perdu',
              race: '',
              color: 'noir'
            }
          }
        ]);
      });
    }
  }
})();
