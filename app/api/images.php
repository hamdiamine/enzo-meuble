<?php
$app->get('/api/images/bypage/{code}', function($request){
    require_once('dbconnect.php');
    $code = $request->getAttribute('code');
    $query = "select i.* from enzo_image i, enzo_page p where p.pag_code = $code and p.pag_id = i.pag_id";
    $result = $mysqli->query($query);

    while($row = $result->fetch_assoc()){
      $data[] = $row;
    }

    if(isset($data)){
      header('Content-type: application/json');
      return $this->response->withJson($data);
    }
    return null;
});

$app->get('/api/images/bylot/{code}', function($request){
    require_once('dbconnect.php');
    $code = $request->getAttribute('code');
    $query = "select i.* from enzo_image i, enzo_lot l where l.lot_code = $code and l.lot_id = i.lot_id and i.img_actif = 1 order by i.img_ordre";
    $result = $mysqli->query($query);

    while($row = $result->fetch_assoc()){
      $data[] = $row;
    }

    if(isset($data)){
      header('Content-type: application/json');
      echo json_encode($data);
    }
    return null;
});

$app->post('/api/images/singleupload', function($request){
    //require_once('dbconnect.php');
    $code = $request->getParsedBody()['code'];
    echo $code;
    return;
    /*
    //$file = $request->getParsedBody()['file'];
  	if (!empty( $_FILES ) ) {
  	    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
  	    $uploadPath = "images/uploads/".$_FILES[ 'file' ][ 'name' ];
  		if(move_uploaded_file($tempPath, $uploadPath)){
        echo "Upload avec succes";
  		}else{
        echo "Problème lors de la copie depuis le TMP au repertoire cible";
  		}
   	} else {
      echo "Problème upload";
  	}*/
});
