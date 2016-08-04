function metadata() {
    return {
        name: "StringReplace",
        description: "替换指定位置的字符串。包含3个入参和1个出参，入参offset是开始查找的位置，toBeReplaced是被替换的字符串，toReplace是替换成的字符串，出参result是返回的结果字符串。",
        version: "1.0",
        inArgs: [
        "sourceString",
        "offset",
        "toBeReplaced",
        "toReplace",
        ],
        outArgs: [
        "result",
        ]
    };
}

function execute(inArgs, resultCallback) {

    var input = inArgs.sourceString;
    var offset = inArgs.offset;
    var beReplacedStr = inArgs.toBeReplaced;
    var replaceStr = inArgs.toReplace;
    if(input==null || offset==null || beReplacedStr==null || replaceStr==null)
        throw new ArgumentNullException("input, offset, beReplacedStr or replaceStr");

    var result;
    try{
        var startIndex = input.indexOf(beReplacedStr,offset);
        var surfixSource = input.substring(0, startIndex);
        var replaceSource = input.substring(startIndex, input.length);
        result = surfixSource + replaceSource.replace(beReplacedStr, replaceStr);
    }catch(err){
        throw new RuntimeException(err);
    }

    resultCallback({
        end: "success",
        outArgs: {
            result: result；,
        }
    });
}

module.exports.metadata=metadata;
module.exports.execute=execute;
