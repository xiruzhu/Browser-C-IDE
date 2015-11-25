var errorList = [];
function error(row, text, errorType){
	this.row = row;
	this.text = text;
	this.errorType = errorType;
}

function addLineError(text)
{
	this.text += "\n" + error;
}
function addError(errList, error){
	errList[error.row] = error;
}
function removeError(error){
	errList[error.row] = undefined;
}
function value(type, name){
    this.name = name;
    this.type = type;
}

function parseCompilerError(text, errorList){
    
    if(text.search("gcc: error:") === 0){
        return errorList;
    }
    var fileName = text.substr(0, text.indexOf(":", 0) + 1);
    var lines = text.split('\n');
	var index = 0;
	var row = 0;
	var err;

	for(var i = 0; i < lines.length; i++){
	    index = lines[i].indexOf(": error:");
	    if(index >= 0){
	        //There is an error on this line
	        row = parseInt(lines[i].substr(fileName.length, lines[i].indexOf(':', fileName.length+1)));
	        err = new error(row, lines[i], 0);
	        addError(errorList,  err);
	        
	    }
	}
}
