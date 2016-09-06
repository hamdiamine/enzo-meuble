/*Controlleur de la page Mail*/
app.controller('MailCtrl', function ($scope, $state) {
  $('html, body').animate({scrollTop:0},
                           700,
                           'linear');
  $('#toTopHover',this).stop().animate({'opacity':0},
                                       600,
                                       'linear');
});
