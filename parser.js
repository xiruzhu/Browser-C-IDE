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
	'=':true,
	'+':true,
	'-':true,
	'*':true,
	'/':true,
	'%':true,
	'(':true,
	')':true,
	'{':true,
	'}':true,
	'[':true,
	']':true,
	'&':true,
	'|':true,
	'!':true,
	'#':true,
	'\"':true,
	'\'':true,
	' ':true
};

var dataArray;
var buffer;
var StopParse = 0;
var currentWord;

var currentIndex = 0;
var currentLine = 0;

function Word(startInd, len, color)
{
	this.startIndex = startInd;
	this.length = len;
	this.color = color;
}

function parseChar(c)
{
	if(breakCharacter[c])
	{
		if(keyWord[buffer])
		{
			buffer="";
			return 2;
		}
		else if(type[buffer])
		{
			buffer="";
			return 3;
		}
	}

	buffer.push(c);

	if(number[c])
		return 1;

	return 0;
}




