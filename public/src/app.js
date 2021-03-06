var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/accueil");
    //
    // Now set up the states
    $stateProvider
      .state('accueil', {
          url: "/accueil",
          templateUrl: "src/partial/accueil.html",
          controller: "AccueilCtrl"
      })
      .state('login', {
          url: "/login",
          templateUrl: "src/partial/login.html",
          controller: "LoginCtrl"
      })

    .state('gallerie', {
        url: "/gallerie/:id",
        templateUrl: "src/partial/gallerie.html",
        controller: "GallerieCtrl"
    })
    .state('mail', {
        url: "/mail",
        templateUrl: "src/partial/mail.html",
        controller: "MailCtrl"
    });
});
