function metadata() {
    return {
        name: "StringCompare",
        description: "比较两个字符串是否相等。包含2个入参和2个出口，入参str1，str2是比较的2个字符串，如相等，则走true出口，否则，走false出口。",
        version: "1.0",
        inArgs: [
        "str1",
        "str2"
        ],
        outArgs: []
    };
}

function execute(inArgs, resultCallback) {

    var result = inArgs.str1===inArgs.str2?"true":"false";
    resultCallback({
        end: result,
        outArgs: {}
    });
}

module.exports.metadata=metadata;
module.exports.execute=execute;
