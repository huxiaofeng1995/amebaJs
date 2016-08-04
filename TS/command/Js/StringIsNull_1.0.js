function metadata() {
    return {
        name: "StringIsNull",
        description: "如果输入字符串为null、\"\"、\"null\"则返回true,表明输入字符串为空。",
        version: "1.0",
        inArgs: [
        "sourceString",
        ],
        outArgs: [
        "result",
        ]
    };
}

function execute(inArgs, resultCallback) {
    
    var isNull = inArgs.sourceString==null||inArgs.sourceString==""||inArgs.sourceString=="null";
    var result = isNull?"true":"false";
    resultCallback({
        end: result,
        outArgs: {
            result: isNull,
        }
    });
}

module.exports.metadata=metadata;
module.exports.execute=execute;
