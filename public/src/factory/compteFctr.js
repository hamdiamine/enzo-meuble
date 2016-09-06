app.factory('compteFctr', function ($http, $q) {
    var factory = {
        compte:null,
        /*List des image d'une page*/
        authentification: function (login,mdp) {
            var url = urlService + "/api/comptes/login/'"+login+"'/'"+mdp+"'";
            var config = {};
            var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    if(data!==""){
                      factory.compte = data;
                      deferred.resolve(data);
                    }
                    else {
                      deferred.resolve(null);
                    }
                }).error(function (error, status) {
                    deferred.reject("Erreur authentification");
                });
            return deferred.promise;
        }
        /**************************************************************/
    };
    return factory;
});
