<?php
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
?>
