/*Controlleur de la page Gallerie*/
app.controller('GallerieCtrl', function ($scope, $state, $stateParams) {

     $('html, body').animate({scrollTop:0},
                              700,
                              'linear');
     $('#toTopHover',this).stop().animate({'opacity':0},
                                          600,
                                          'linear');

    var id = $stateParams.id;
    
});
