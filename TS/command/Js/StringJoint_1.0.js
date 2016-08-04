function metadata() {
    return {
        name: "StringJoint",
        description: "实现字符串的连接操作。包含2个入参和1个出参，入参strList是字符串列表，joint是字符串连接符，出参result是连接后的字符串。",
        version: "1.0",
        inArgs: [
        "strList",
        "joint"
        ],
        outArgs: [
        "result",
        ]
    };
}

function execute(inArgs, resultCallback) {

	var strList = inArgs.strList;
	var joint = inArgs.joint;
	if(strList==null || joint==null)
        throw new ArgumentNullException("strList or joint");

    var result;
    try{
        result=strList.join(joint);
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
