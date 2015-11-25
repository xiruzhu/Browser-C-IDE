function parseCompilerError(compilerError, errorList){

	var index = 0;
	var colon1;
	var colon2;
	var colon3;
	var row;

    if(compilerError.indexOf("error") < 0 && compilerError.indexOf("error") < 0){
    //nothing to parse
    	return errorList;
	}

	index = compilerError.indexOf("error", index);

	while(index >= 0){
	compilerError.substr(index, compilerError.indexOf("\n", index));

	colon1 = compilerError.lastIndexOf(':', index) -1;
	colon2 = compilerError.lastIndexOf(':', colon1) -1;
	colon3 = compilerError.lastIndexOf(':', colon2)+1;

	row = parseInt(compilerError.substring(colon3, colon2 + 1));
	index = compilerError.indexOf("error", index);


	}
}