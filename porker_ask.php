<?php
// manage/process and store streams
foreach($_POST as $k => $p){

    if (strpos($p, 'base64,')){ 
     $w3stream = substr(trim($p), 23);
     $w3streamfw = base64_decode($w3stream);
    } elseif($k == 'FNameChunks'){
  		$FNameChunks = trim(utf8_encode($p));
  		}
  	
       
}
$media_fname = $FNameChunks.'.webm';
//sleep(3);
if(!file_put_contents( "./".$media_fname, $w3streamfw, FILE_APPEND | LOCK_EX )){
 echo"Error:: w3FWerror"; // ERROR: the file has not been created
	exit;
} else {
	echo ' -OK! added chunk- ';exit;
}
exit;
?>
