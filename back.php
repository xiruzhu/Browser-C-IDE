<?php 
	
	class t {
      public $test = "";
   	}

   	$a = new t(); 
   	$a->test = "#"; 

   	$arr = array('Library'=>"#include<stdio.h> \n main(){printf("Hello World");}");
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