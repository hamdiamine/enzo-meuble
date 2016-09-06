<?php
$app->get('/api/comptes/login/{login}/{mdp}', function($request){
    require_once('dbconnect.php');
    $login = $request->getAttribute('login');
    $mdp = $request->getAttribute('mdp');
    $query = "select c.* from enzo_compte c where c.cpt_login = $login and c.cpt_mdp = $mdp";
    $result = $mysqli->query($query);
    $data = $result->fetch_assoc();
    if(isset($data)){
      header('Content-type: application/json');
      return $this->response->withJson($data);
    }
});
