<?php 
			header('Access-Control-Allow-Origin: *');
			header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
			header('Access-Control-Max-Age: 1000');
			header('Access-Control-Allow-Headers: Content-Type');

			$data = json_encode(array("your_request_was" => $_POST['code']));
			//echo $data;

			 // $data = "#include<stdio.h> \n int main(){printf(\"Hello World\"); return 0;}";
			//$myfile = fopen("something.txt", "w");

			// lock to prevent anyone else to write 
			// to file at the same time, extra safety
			// file_put_contents($file, $library, FILE_APPEND | LOCK_EX); 
			file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
			$consoleMsg = shell_exec('gcc -o jeremysucks userProgram.c');
			print $consoleMsg;

			 if( $consoleMsg ){

			$output = shell_exec('./jeremysucks');
			$arr = array('error1' => consoleMsg, 'error2' => output );
			 $json = json_encode($arr);
			 }
			//print $arr;
			 file_put_contents("./test.txt", $json);

			echo $json;
		?> 	
