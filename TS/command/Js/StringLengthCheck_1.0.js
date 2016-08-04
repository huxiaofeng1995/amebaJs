function metadata() {
    return {
        name: "StringLengthCheck",
        description: "判断读字符串长度与预期长度是否相等。包含2个入参和3个出口，入参str是传入的字符串，length是预期长度，如果相等，走zero出口，小于走minus出口，大于走positive出口。",
        version: "1.0",
        inArgs: [
        "str",
        "length"
        ],
        outArgs: []
    };
}

function execute(inArgs, resultCallback) {

    var str = inArgs.str;
    var length = inArgs.length;
    if(str==null || length==null)
        throw new ArgumentNullException("str or length");

    var end = "positive";
    var strLength = str.length;
    if(strLength<length){
        end="minus";
    }else if(strLength==length){
        end="zero";
    }

    resultCallback({
        end: end,
        outArgs: {}
    });
}

module.exports.metadata=metadata;
module.exports.execute=execute;
