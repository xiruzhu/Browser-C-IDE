<?php 
			header('Access-Control-Allow-Origin: *');
			header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
			header('Access-Control-Max-Age: 1000');
			header('Access-Control-Allow-Headers: Content-Type');

			error_reporting( E_ALL ); 
			ini_set('log_errors', '1'); 
			ini_set('error_log', './error.txt');

			$data = json_encode(array("your_request_was" => $_POST['code']));
			//echo $data;
			shell_exec('php compile.php');


			echo $data;
			//$something = json_encode(array("blahblah" => "wew"));
			// echo $something;
			
			 // $data = "#include<stdio.h> \n int main(){printf(\"Hello World\"); return 0;}";

			// lock to prevent anyone else to write 
			// to file at the same time, extra safety
			$file = 'userProgram.c';
			file_put_contents($file, $data, FILE_APPEND | LOCK_EX); 
			
			//echo json_encode(array("this_is_your_request" => exec('php compile.php')));
			 //if( $consoleMsg ){

//			$output = shell_exec('./jeremysucks');
			//$arr = array('error1' => consoleMsg, 'error2' => output );
 			 //$json = json_encode($arr);

//			$last_line = system('ls', $retval);

//			echo $last_line;			
			 
//			$return = json_encode(array("this_is_your_request" => "asjdsajda"));
			//print $arr;
			//echo $return;
			// file_put_contents("./test.txt", $json);

		//	echo $json;
?> 	
