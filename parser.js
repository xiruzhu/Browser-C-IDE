var values =
{
	'+':1,
	'-':1,
	'*':1,
	'/':1,
	'%':1,
	'++':1,
	'--':1,
	'==':1,
	'!=':1,
	'>':1,
	'<':1,
	'<=':1,
	'>=':1,
	'&&':1,
	'||':1,
	'!':1,
	'&':1,
	'|':1,
	'^':1,
	'~':1,
	'<<':1,
	'>>':1,
	'=':1,
	'+=':1,
	'-=':1,
	'*=':1,
	'/=':1,
	'%=':1,
	':':1,

	'\n':2,
	'(':2,
	')':2,
	'{':2,
	'}':2,
	'[':2,
	']':2,
	'#':2,
	'\"':2,
	'\'':2,
	' ':2,
	',':2,
	
	'0':0,
	'1':0,
	'2':0,
	'3':0,
	'4':0,
	'5':0,
	'6':0,
	'7':0,
	'8':0,
	'9':0,
	
	'char':5,
	'double':5,
	'int':5,
	'long':5,
	'short':5,
	'signed':5,
	'struct':5,
	'union':5,
	'unsigned':5,
	'void':5,

	'auto':4,
	'break':4,
	'case':4,
	'const':4,
	'continue':4,
	'default':4,
	'do':4,
	'else':4,
	'enum':4,
	'extern':4,
	'for':4,
	'goto':4,
	'if':4,
	'register':4,
	'return':4,
	'sizeof':4,
	'static':4,
	'switch':4,
	'typedef':4,
	'volatile':4,
	'while':4,

};

function possibility( operator, number, breakType, type, key)
{
	this[1] = operator;
	this[0] = number;
	this[2] = breakType;
	this[4] = key;
	this[5] = type
}
//next System

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
var errorList;

function parseError(line, row, prevRow){
	//So the first goal of this is to parse the string
	if(line.length === 0 || row == prevRow){
		errorList[row] = undefined;
		return errorList;
	}
	//error checking
    var bufferedLine=[];
	var buf ="";
	var bufType;
	var lineError = new error(row, "", 0);
	//Parses the entire file into blocks split by operators and breakCharacters
	for(var i = 0; i < line.length; i++){
	    if(values[line.charAt(i)] > 0){
	        if(buf.length > 0){
	             if(isNaN(buf))
	                bufferedLine.push(new value(values[buf], buf));
	               else
	               bufferedLine.push(new value(0, buf));
	        }
	        if(line.charAt(i) != ' '){
	            if(values[line.charAt(i) + "" + line.charAt(i+1)] > 0){
	                bufferedLine.push(new value(values[line.charAt(i) + "" + line.charAt(i+1)] , line.charAt(i) + "" + line.charAt(i+1)));
	                i++;
	            }else
	                bufferedLine.push(new value(values[line.charAt(i)], line.charAt(i)));
	        }
	        buf ="";
	    }else
	    buf += line.charAt(i);
	}

	if(lineError.text.length > 0){
		addError(errorList, lineError);
	}
	
	for(i = 0; i < bufferedLine.length; i++)
    console.log(bufferedLine[i]);
    

	return errorList;

}

parseError("struct test * jeremy = (char *) malloc(sizeof(struct test *) * BLOCK_SIZE);", 1);

function parseCompilerError(compilerError){

	var index = 0;
	var colon1;
	var colon2;
	var colon3;

    if(compilerError.indexOf("error") < 0 && compilerError.indexOf("error") < 0){
    //nothing to parse
    	return errorList;
	}

	index = compilerError.indexOf("error", index);
	compilerError.substr(index, compilerError.indexOf("\n", index));

	var colon1 = compilerError.lastIndexOf(':', index) -1;
	var colon2 = compilerError.lastIndexOf(':', colon1) -1;
	var colon3 = compilerError.lastIndexOf(':', colon2)+1;

	var value = compilerError.substring(colon3, colon2 + 1);

console.log(value);
	}

	while(index >= 0){
		
	}
	
	index = 0;
	compilerError.indexOf("error", index);
	compilerError.substr(index, compilerError.indexOf("\n", index));
}

