function metadata() {
    return {
        name: "StringFillLeft",
        description: "对字符串进行左补齐。包含3个入参和1个出参，入参target是要补齐的字符串，expectLength是期望的长度，fillChar是补齐的字符，出参result是补齐后的字符串。",
        version: "1.0",
        inArgs: [
        "target",
        "expectLength",
        "fillChar"
        ],
        outArgs: [
        "result",
        ]
    };
}

function execute(inArgs, resultCallback) {

    var str = inArgs.target;
    var length = inArgs.expectLength;
    var fillChar = inArgs.fillChar;
    if(str==null || length==null || fillChar==null)
        throw new ArgumentNullException("target, expectLength or fillChar");

    var result = str;
    if(str.length<length){
        for (var i = str.length; i < length; i++) {
            result=fillChar+result;
        };
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
