<?php
$app->get('/api/texts/bypage/{code}', function($request){
    require_once('dbconnect.php');
    $code = $request->getAttribute('code');
    $query = "select t.txt_code, t.txt_valeur from enzo_texte t, enzo_page p where p.pag_code = $code and p.pag_id = t.pag_id";
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

$app->put('/api/texts/update', function($request){
    require_once('dbconnect.php');
    $txt_code = $request->getParsedBody()['txt_code'];
    $txt_valeur = $request->getParsedBody()['txt_valeur'];

    $query = "update enzo_texte t set t.txt_valeur = '$txt_valeur' where t.txt_code = '$txt_code'";


    $result = $mysqli->query($query);

    return json_encode($txt_valeur);
});
