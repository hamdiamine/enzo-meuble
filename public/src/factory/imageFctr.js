app.factory('imageFctr', function ($http, $q) {
    var factory = {
        /*List des image d'une page*/
        listByPage: function (page) {
            var url = urlService + "/api/images/bypage/'"+page+"'";
            var config = {};
            var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    deferred.resolve(data);
                }).error(function (error, status) {
                    deferred.reject("Erreur récupération liste des images");
                });
            return deferred.promise;
        },
        /**************************************************************/

        listByLot: function (lot) {
            var url = urlService + "/api/images/bylot/'"+lot+"'";
            var config = {};
            var deferred = $q.defer();
            $http.get(url, config)
                .success(function (data, status) {
                    deferred.resolve(data);
                }).error(function (error, status) {
                    deferred.reject("Erreur récupération liste des images");
                });
            return deferred.promise;
        },
        /**************************************************************/

        updateByCode: function (formData) {
            var url = urlService + "/api/images/singleupload";
            //var data = {'file':formData};
            var config = {'Content-Type': 'undefined','transformRequest':angular.identity};
            var deferred = $q.defer();
            $http.post(url, formData,{transformRequest: angular.identity,
                                      headers: {'Content-Type': undefined,'Process-Data': false}
                                     })
                .success(function (data, status) {
                    deferred.resolve(data);
                }).error(function (error, status) {
                    deferred.reject("Erreur upload image");
                });
            return deferred.promise;
        }
        /**************************************************************/
    };
    return factory;
});
