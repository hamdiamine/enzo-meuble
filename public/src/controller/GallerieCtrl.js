/*Controlleur de la page Gallerie*/
app.controller('GallerieCtrl', function ($scope, $state, $stateParams) {

     $('html, body').animate({scrollTop:0},
                              700,
                              'linear');
     $('#toTopHover',this).stop().animate({'opacity':0},
                                          600,
                                          'linear');

      switch ($stateParams.id) {
        case "1":
          $scope.nomPage = 'Meuble';
          break;
        case "2":
          $scope.nomPage = 'Cuisine';
          break;
        case "3":
          $scope.nomPage = 'Porte';
          break;
        case "4":
          $scope.nomPage = 'Agencement';
          break;
        case "5":
          $scope.nomPage = 'Pharmacie';
          break;
        default:
      }

});
