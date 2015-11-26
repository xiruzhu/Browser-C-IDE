<?php 
			header('Access-Control-Allow-Origin: *');
			header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
			header('Access-Control-Max-Age: 1000');
			header('Access-Control-Allow-Headers: Content-Type');

			ini_set('display_errors', 1);
			ini_set('display_startup_errors', 1);
			error_reporting(E_ALL);

			$data = json_encode(array("your_request_was" => $_POST['code']));
			//echo $data;
			//$Code = $_Post['code'];
			//$data = "#include<stdio.h> \n int main(){printf(\"Hello World\"); return 0;}";

			//$codee = json_encode(array("code_so_far:" => $Code));
			//echo $codee;

			$file = "userProgram.c";
			file_put_contents($file, $_POST['code'] , LOCK_EX);
			$command = $_POST['command'];

			$process = proc_open($command,
			    array(
			        1 => array("pipe", "w"),  //stdout
			        2 => array("pipe", "w")   // stderr
			    ), $pipes);

			//sleep(2);
			$output = exec("./a.out 2>&1");
			
			
			while(strpos($output, "not found")){
				sleep(1);
				$output = exec("./a.out 2>&1");
			}
			// //echo $output;

			$json = json_encode(array('Compiler Error:' => stream_get_contents($pipes[2]), 'Output:' => $output));
			echo $json;

?> 	