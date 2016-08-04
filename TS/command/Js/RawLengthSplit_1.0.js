tfunction metadata() {
	return {
		name: "RawLengthSplit",
		description: "以指定字节长度分割字符串,例如：入参分别为aaabbbccc和3,返回结果为{aaa,bbb,ccc},如果为汉字则将汉字转换为GBK编码格式进行编码，不是2的整数倍则减1进行拆分",
		version: "1.0",
		inArgs: [
		"src",
		"length"
		],
		outArgs: [
		"strArray",
		]
	};
}

function execute(inArgs, resultCallback) {

	var source = inArgs.src;
	var length = inArgs.length;
	if(source==null || length==null)
		throw new ArgumentNullException("src or length");

	var strArray = [];
	try{
		var bytesLength = getBytesLength(source);
		if(bytesLength<length){
			strArray.push(source);
		}else{
			var section = "";
			var sectionLength = 0;

			for (var i = 0; i < source.length; i++) {
				var c = source[i];
				var cLenght = getBytesLength(c);
				if(sectionLength+cLenght<=length){
					sectionLength+=cLenght;
					section+=c;
				}else{
					strArray.push(section);
					section=c;
					sectionLength=cLenght;
				}
				if(i+1==source.length && section!=""){
					strArray.push(section);
				}
			}
		}
	}catch(err){
		throw new RuntimeException(err);
	}

	resultCallback({
		end: "success",
		outArgs: {
			strArray: strArray,
		}
	});
}

function getBytesLength(str){  
	return str.replace(/[^\x00-\xff]/g,"aa").length;  
}; 

module.exports.metadata=metadata;
module.exports.execute=execute;
