app.factory('textFctr', function ($http, $q) {
    var factory = {
        /*List des image d'une page*/
        listByPage: function (page) {
            var url = urlService + "/api/texts/bypage/'"+page+"'";
            var config = {};
            var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    deferred.resolve(data);
                }).error(function (error, status) {
                    deferred.reject("Erreur récupération liste des texts");
                });
            return deferred.promise;
        },
        /**************************************************************/

        /*MAJ text par code*/
        updateByCode: function (code, valeur) {
            var url = urlService + "/api/texts/update";
            var config = {'Content-Type': 'application/x-www-form-urlencoded'};
            var texte = {txt_code : code, txt_valeur : valeur};
            var deferred = $q.defer();
            $http.put(url,texte,config)
                .success(function (data, status) {
                    deferred.resolve(data);
                }).error(function (error, status) {
                    deferred.reject("Erreur MAJ texte");
                });
            return deferred.promise;
        }
        /**************************************************************/
      };
      return factory;
});
