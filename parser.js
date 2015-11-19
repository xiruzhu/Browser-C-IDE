
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
	struct:true
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

var global = new scopeNode("Global");
var currentScope = global;

function scopeNode(name){
	this.parent = currentScope;
	this.name = name;
	this.data = null;
	this.child = null;
	this.bracketStack = null;
}



function parseLine(line)
{
	var tokens = line.split(" ");
	var colorChange;
	var j = 0;

	var i;
	for(i = 0; i < tokens.length; i++)
	{
		if(keyWord[tokens[i]])
			colorChange[i] = 1;
		else if(type[tokens[i]])
		    colorChange[i] = 2;
		else
			colorChange[] = 0;
	}
}



