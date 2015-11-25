<?php 

	// require_once 'include/sqAES.php';
	// require_once 'include/JCryption.php';

	// $postBefore = print_r($_POST, true);

	// JCryption::decrypt();

	// header('Content-type: text/plain');
	// echo "Original POST\n======================\n";
	// print_r($postBefore);
	// echo "jCryption example form\n======================\n";
	// print_r($_POST);


   	$arr = array('Library'=>"#include<stdio.h> \n int main(){printf(\"Hello World\"); return 0;}");
   	$json = json_encode($arr);

   	$obj = json_decode($json);
   	$library = $obj->{'Library'};

	$file = "userProgram.c";

	// lock to prevent anyone else to write 
	// to file at the same time, extra safety
	file_put_contents($file, $library, FILE_APPEND | LOCK_EX); 
	$consoleMsg = shell_exec('gcc -o jeremysucks userProgram.c');
	print $consoleMsg;
	$output = shell_exec('./jeremysucks');
	print $output;


?> 	
