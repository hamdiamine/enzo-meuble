/*Controlleur de la page Login*/
app.controller('LoginCtrl', function ($scope, $state, compteFctr) {
  $('html, body').animate({scrollTop:0},
                           700,
                           'linear');
  $('#toTopHover',this).stop().animate({'opacity':0},
                                       600,
                                       'linear');
                                       
   $scope.login=null;
   $scope.mdp = null;
   $scope.dologin = function(){
     if($scope.login===null || $scope.mdp===null){
       toastr["error"]("Login et mot de passe sont obligatiores");
       return;
     }else {
       compteFctr.authentification($scope.login, $scope.mdp).then(function (compte) {
            if (compte !== null) {
                $state.go("accueil");
            }
            else {
              $scope.login=null;
              $scope.mdp = null;
              toastr["error"]("login et/ou mot de passe incorrect");
            }
        }, function(msg){
            $scope.login=null;
            $scope.mdp = null;
            toastr["error"](msg);
        });
     }
   }
});
