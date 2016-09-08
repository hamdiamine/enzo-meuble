/*Controlleur de la page Accueil*/
app.controller('AccueilCtrl', function ($scope, $state, $timeout, imageFctr, compteFctr, textFctr, imageFctr) {

    /*Initialisation des champs*/
    $scope.textValue = '';
    $scope.textCode = '';
    $scope.imageCode = '';
    /*
    $scope.img_mbl = urlImg + 'none.jpg';
    $scope.img_csn = urlImg + 'none.jpg';
    $scope.img_prt = urlImg + 'none.jpg';
    $scope.img_agc = urlImg + 'none.jpg';
    $scope.img_prc = urlImg + 'none.jpg'; */

    $scope.listImgCarousel = [{url:urlImg + 'none.jpg'},
                              {url:urlImg + 'none.jpg'},
                              {url:urlImg + 'none.jpg'},
                              {url:urlImg + 'none.jpg'},
                              {url:urlImg + 'none.jpg'}];

    textFctr.listByPage('accueil').then(function(data){
      var i;
      for (i = 0; i < data.length; i++) {
        if (data[i].txt_code ==='desc_meuble' ) {
            $scope.txt_mbl = data[i].txt_valeur;
        }else if (data[i].txt_code ==='desc_cuisine' ) {
            $scope.txt_csn = data[i].txt_valeur;
        }else if (data[i].txt_code ==='desc_porte' ) {
            $scope.txt_prt = data[i].txt_valeur;
        }else if (data[i].txt_code ==='desc_agence' ) {
            $scope.txt_agc = data[i].txt_valeur;
        }else if (data[i].txt_code ==='desc_pharmacie' ) {
            $scope.txt_prc = data[i].txt_valeur;
        }else if (data[i].txt_code ==='lbl_inscription' ) {
            $scope.txt_inscrp = data[i].txt_valeur;
        }else if (data[i].txt_code ==='lbl_catalogue' ) {
            $scope.txt_catal = data[i].txt_valeur;
        }else if (data[i].txt_code ==='lbl_saisie' ) {
            $scope.txt_sais = data[i].txt_valeur;
        }else if (data[i].txt_code ==='lbl_bouton' ) {
            $scope.txt_btn = data[i].txt_valeur;
        }
      }
    },function(msg){
       toastr["error"](msg);
    });

    imageFctr.listByPage('accueil').then(function(data){
      for (i = 0; i < data.length; i++) {
        switch (data[i].img_code) {
          case "img_mbl":
            $scope.img_mbl = urlImg + data[i].img_value;
            break;
          case "img_csn":
            $scope.img_csn = urlImg + data[i].img_value;
            break;
          case "img_prt":
            $scope.img_prt = urlImg + data[i].img_value;
            break;
          case "img_agc":
            $scope.img_agc = urlImg + data[i].img_value;
            break;
          case "img_prc":
            $scope.img_prc = urlImg + data[i].img_value;
            break;
          default:
            null;

        }
      }
    },function(msg){
      toastr["error"](msg);
    });


    $scope.showUpdate = function(){
      if(compteFctr.compte===null){
        return true;
      }else{
        return false;
      }
    }

    $scope.openModifText=function(textCode){
      $scope.textCode = textCode
      $('#modal_modif_text').modal('show');
    }

    $scope.openModifImage=function(imageCode){
      $scope.imageCode = imageCode;
      $('#modal_modif_img').modal('show');
    }

    $scope.updateText = function(){
      textFctr.updateByCode($scope.textCode, $scope.textValue).then(function(data){
        if ($scope.textCode ==='desc_meuble' ) {
            $scope.txt_mbl = $scope.textValue;
        }else if ($scope.textCode ==='desc_cuisine' ) {
            $scope.txt_mbl = $scope.textValue;
        }else if ($scope.textCode ==='desc_porte' ) {
            $scope.txt_prt = $scope.textValue;
        }else if ($scope.textCode ==='desc_agence' ) {
            $scope.txt_agc = $scope.textValue;
        }else if ($scope.textCode ==='desc_pharmacie' ) {
            $scope.txt_prc = $scope.textValue;
        }else if ($scope.textCode ==='lbl_inscription' ) {
            $scope.txt_inscrp = $scope.textValue;
        }else if ($scope.textCode ==='lbl_catalogue' ) {
            $scope.txt_catal = $scope.textValue;
        }else if ($scope.textCode ==='lbl_saisie' ) {
            $scope.txt_sais = $scope.textValue;
        }else if ($scope.textCode ==='lbl_bouton' ) {
            $scope.txt_btn = $scope.textValue;
        }
        $scope.textValue = '';
        $scope.textCode = '';
        $('#modal_modif_text').modal('hide');
      },function(msg){
        toastr["error"](msg);
      });
    }

    $timeout(function () {
      jssor_1_slider_init();
    });


    /*upload image*/
    $scope.imageUpload = function(event){
  	    var files = event.target.files; //FileList object
  	    var file = files[files.length-1];
  	    $scope.file = file;
  	    var reader = new FileReader();
  	    reader.onload = $scope.imageIsLoaded;
  	    reader.readAsDataURL(file);
  	}

  	$scope.imageIsLoaded = function(e){
  	    $scope.$apply(function() {
  	    	$scope.step = e.target.result;
  	    });
  	}

    $scope.upload = function(){
      var fd = new FormData();
      angular.forEach($scope.files, function(file){
  			fd.append('file', file);
  		});
      fd.append('code',$scope.imageCode);
      //fd.append('file',$scope.file);
      imageFctr.updateByCode(fd).then(function(data){
        toastr["info"](data);
      },function(msg){
        toastr["error"](msg);
      });
    }
    /******************************************************************/
});
