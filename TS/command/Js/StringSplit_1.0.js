function metadata() {
    return {
        name: "StringSplit",
        description: "将字符串以分隔符进行拆分，得到字符串数组。包含2个入参和1个出参，入参sourceString为源字符串，delimiter为分隔符，出参result为输出的字符串数组。",
        version: "1.0",
        inArgs: [
        "sourceString",
        "delimiter"
        ],
        outArgs: [
        "result",
        ]
    };
}

function execute(inArgs, resultCallback) {

    if(inArgs.sourceString==null || inArgs.delimiter==null)
        throw new ArgumentNullException("sourceString or delimiter");

    var resultArray = inArgs.sourceString.split(inArgs.delimiter);
    resultCallback({
        end: "success",
        outArgs: {
            result: resultArray,
        }
    });
}

module.exports.metadata=metadata;
module.exports.execute=execute;
