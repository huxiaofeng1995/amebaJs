function metadata() {
	return {
		name: "StringComplete",
		description: "字符串补足:location指的是 源字符串在补足后字符串中的起始位置;如果左补齐,则location为0; 右补齐,location为length-source.length()-1;两边补齐,则location为左补足位数-1;",
		version: "1.0",
		inArgs: [
		"sourceString",
		"length",
		"location",
		"adds"
		],
		outArgs: [
		"result",
		]
	};
}

function execute(inArgs, resultCallback) {

	var str = inArgs.sourceString;
	var length = inArgs.length;
	var location = inArgs.location;
	var adds = inArgs.adds;
	if(str==null || length==null || location==null || adds==null)
		throw new ArgumentNullException("sourceString, length, location or adds");

	var result = "";
	try{
		var diffLenght = length-str.length;
		if(diffLenght<0)
		{
			result = str;
		}else{

			var leftLength = Math.min(diffLenght, location);
			for (var i = 0; i < leftLength; i++)
				result+=adds;

			result+=str;

			var rightLength = Math.min(length-result.length, length-str.length);
			for (var i = 0; i < rightLength; i++)
				result+=adds;
		}
	}catch(err){
		throw new RuntimeException(err);
	}

	resultCallback({
		end: "success",
		outArgs: {
			result: result,
		}
	});
}

module.exports.metadata=metadata;
module.exports.execute=execute;
