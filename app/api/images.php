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

$app->post('/api/images/updatebycode/{code}', function($request){
    require_once('dbconnect.php');
    $code = $request->getAttribute('code');
    $file = $request->getParsedBody()['file'];
    return json_encode($file);
    if (!empty( $_FILES ) ) {
  	    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
  	    $uploadPath = "../uploads/".$_FILES[ 'file' ][ 'name' ];
  		if(move_uploaded_file($tempPath, $uploadPath)){
        return json_encode($tempPath);
  		}else{
  		    echo "Failed to upload!";
  		}
   	} else {
  	    echo "Error occurred!";
  	}
});
