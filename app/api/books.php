<?php
$app->get('/api/books', function(){
    require_once('dbconnect.php');

    $query = "select * from books";
    $result = $mysqli->query($query);

    while($row = $result->fetch_assoc()){
      $data[] = $row;
    }

    if(isset($data)){
      header('Content-type: application/json');
      echo json_encode($data);
    }
});

$app->get('/api/books/{id}', function($request){
    require_once('dbconnect.php');
    $id = $request->getAttribute('id');
    $query = "select * from books where id = $id";
    $result = $mysqli->query($query);
    $data[] = $result->fetch_assoc();
    header('Content-type: application/json');
    echo json_encode($data);
});
