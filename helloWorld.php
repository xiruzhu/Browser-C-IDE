<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    echo "Hello World\n";
    echo "{".json_encode("Hello World")."}";
    echo "\n";

    $data = "#include <stdio.h> \n int main(){\nprintf(\"Hello World\");\n void * test = malloc(5);\n test += 5;\n return 0;\n}";
	$myfile = "userProgram.c";
	file_put_contents($myfile, $data, LOCK_EX);


	$process = proc_open('gcc -Wall -o jeremysucks malloc.c',
    array(
        1 => array("pipe", "w"),  //stdout
        2 => array("pipe", "w")   // stderr
    ), $pipes);

	$output = exec("./malloc 2>&1");

	echo "Output:".$output;
	echo "TEST";
?>