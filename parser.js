var type = 
{
	char:true,
	double:true,
	int:true,
	long:true,
	short:true,
	signed:true,
	struct:true,
	union:true,
	unsigned:true,
	void:true,
};
var keyWord = 
{
	auto:true,
	break:true,
	case:true,
	const:true,
	continue:true,
	default:true,
	do:true,
	else:true,
	enum:true,
	extern:true,
	for:true,
	goto:true,
	if:true,
	register:true,
	return:true,
	sizeof:true,
	static:true,
	switch:true,
	typedef:true,
	unsigned:true,
	volatile:true,
	while:true
};

var number =
{
	'0':true,
	'1':true,
	'2':true,
	'3':true,
	'4':true,
	'5':true,
	'6':true,
	'7':true,
	'8':true,
	'9':true
};

var breakCharacter=
{
	'=':handleBreakCharacter,
	'+':handleBreakCharacter,
	'-':handleBreakCharacter,
	'*':handleBreakCharacter,
	'/':handleBreakCharacter,
	'%':handleBreakCharacter,
	'(':handleBreakCharacter,
	')':handleBreakCharacter,
	'{':handleBreakCharacter,
	'}':handleBreakCharacter,
	'[':handleBreakCharacter,
	']':handleBreakCharacter,
	'&':handleBreakCharacter,
	'|':handleBreakCharacter,
	'!':handleBreakCharacter,
	'#':handleBreakCharacter,
	'\"':handleBreakCharacter,
	'\'':handleBreakCharacter,
	' ':handleBreakCharacter,
};

var dataArray;
var buffer;
var character;

var currentWord;
var currentWordColor = 0;

var currentIndex = 0;
var currentLine = 0;
var currentLineIndex = 0;

function Word(startInd, len, color)
{
	this.startIndex = startInd;
	this.length = len;
	this.color = color;
}

function handleBreakCharacter(c)
{
	character="";
	keyWord[buffer]; //Call a function to do some work
	buffer="";
}

function handleKeyWord(c)
{
	buffer.push(c);
	changeColor(currentLine, currentLineIndex, buffer.length, 2);
}

function handleType(c)
{
	buffer.push(c);
	changeColor(currentLine, currentLineIndex, buffer.length, 3);
}

function handleNumber(c)
{
	buffer.push(c);
	if(number[c] && currentWordColor)
	{
		changeColor(currentLine, currentLineIndex, 1, 1);
	}
	else if(currentWordColor == 1)
	{
		changeColor(currentLine, currentLineIndex, buffer.length, 0);
	}
}

function changeColor(currentLine, startIndex, length, color)
{

}

function nextLine(c)
{
	return false;
}

function parseChar(c)
{
	currentIndex++;
	character = c;
	if(nextLine(character))
	{
		nextLine++;
		currentLineIndex = 0;
		return;
	}

	currentLineIndex++;

	
}




