var errorList = [];
var warningList = [];

function error(row, col, length, text, errorType){
	this.row = row;
	this.col = col;
	this.length = length;
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

function parseCompilerError(text, errorList, warningList){
    
    if(text.search("gcc: error:") === 0){
        return errorList;
    }
    var fileName = text.substr(0, text.indexOf(":", 0) + 1);
    var lines = text.split('\n');
	var index = 0;
	var row = 0;
	var col = 0;
	var length;
	var err;

	for(var i = 0; i < lines.length; i++){
	    index = lines[i].indexOf(": error:");
	    if(index >= 0){
	        //There is an error on this line
	        col = lines[i].indexOf(':', fileName.length+1);
	        row = parseInt(lines[i].substr(fileName.length, col));
	        length = lines[i].indexOf(':', col+1);
	        length = lines[i].length - length;
	        col = parseInt(lines[i].substr(col + 1, length));
	        err = new error(row, col,length, lines[i], 0);
	        addError(errorList,  err);
	    }
	}

	for(var i = 0; i < lines.length; i++){
	    index = lines[i].indexOf(": warning:");
	    if(index >= 0){
	        //There is an error on this line
	        col = lines[i].indexOf(':', fileName.length+1);
	        row = parseInt(lines[i].substr(fileName.length, col));

	        col = parseInt(lines[i].substr(col + 1, lines[i].indexOf(':', col+1)));
	        err = new error(row, col, length, lines[i], 0);
	        addError(warningList,  err);
	        
	    }
	}
}
