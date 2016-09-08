<?php
	//include("../database/DB_Handler.php");
	$test = "1";
	if (!empty( $_FILES ) ) {
	  	$test = "2";
	    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
			$test = "3";
	    $uploadPath = "../../public/images/uploads/".$_FILES[ 'file' ][ 'name' ];
			$test = "4";

		if(move_uploaded_file($tempPath, $uploadPath)){
			$test = "5";
		}else{
		    $test = "6";
		}
 	} else {
	    $test = "7";
	}
	echo json_encode($test);
