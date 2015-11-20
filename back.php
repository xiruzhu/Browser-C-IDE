<?php 

	// require 'vendor/autoload.php';

	// $key = \RSA\KeyPair::createNew();

	if( empty($_SESSION['key']) || $_GET("text") ){



		print("the user input has been received");
		$get = $GET("text");
		$json = json_decode( $get );
		$LIBRARY = $json->{'library'};
		$CODE = $json->{'code'};
		print $LIBRARY; 
	}

	

	$file = "userProgram.c";
	$library = "#include<stdio.h> \n";
	$code = "main(){printf(\"Hello World\");}";

	// lock to prevent anyone else to write 
	// to file at the same time, extra safety
	file_put_contents($file, $library, FILE_APPEND | LOCK_EX); 
	file_put_contents($file, $code, FILE_APPEND | LOCK_EX); 
	$consoleMsg = shell_exec('gcc -o jeremysucks userProgram.c');
	print $consoleMsg;
	$output = shell_exec('./jeremysucks');
	print $output;

	function cryptoJsAesDecrypt($passphrase, $jsonString){
     $jsondata = json_decode($jsonString, true);
     try {
         $salt = hex2bin($jsondata["s"]);
         $iv  = hex2bin($jsondata["iv"]);
     } catch(Exception $e) { return null; }
     $ct = base64_decode($jsondata["ct"]);

     $concatedPassphrase = $passphrase.$salt;
     $md5 = array();
     $md5[0] = md5($concatedPassphrase, true);

?> 	