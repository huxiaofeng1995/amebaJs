function metadata() {
	return {
		name: "SplitByteArr",
		description: "按照指定字节将字节数组转换为字符串数组，举例说明：如传入的byte数组为{65,97,65,97,65}，splitInt为97，那么截取String[]为{A,A,A}。",
		version: "1.0",
		inArgs: [
		"buff",
		"splitInt"
		],
		outArgs: [
		"result",
		]
	};
}

function execute(inArgs, resultCallback) {

	var buff = inArgs.buff;
	var splitInt = inArgs.splitInt;
	if(buff==null or splitInt==null)
		throw new ArgumentNullException("buff or splitInt");

	var result;
	try{
		result=split(buff, splitInt);
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

function split(buff, splitInt) {
	var count = 0;
	for (var i = 0; i < buff.length; i++) {
		if(buff[i] == splitInt)
			count++;
	};

	if(count == 0)
		return null;

	var splitBuff=[];
	var strBuff=[];
	for (var i = 0; i < buff.length; i++) {
		if(buff[i]==splitInt){
			var str = String.fromCharCode(strBuff)
			splitBuff.push(str);
			strBuff.length = 0;
		}else{
			strBuff.push(buff[i]);
		}
	};
	if(strBuff.length!=0)
		splitBuff.push(String.fromCharCode(strBuff));
	return splitBuff;
}

module.exports.metadata=metadata;
module.exports.execute=execute;
