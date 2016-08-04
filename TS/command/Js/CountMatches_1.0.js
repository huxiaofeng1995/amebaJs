function metadata() {
    return {
        name: "CountMatches",
        description: "子字符串在父串中出现次数。包含2个入参和1个出参，入参par是父字符串，sub是子字符串，出参result是出现的次数。",
        version: "1.0",
        inArgs: [
        "par",
        "sub"
        ],
        outArgs: [
        "result",
        ]
    };
}

function execute(inArgs, resultCallback) {

    var str = inArgs.par;
    var sub = inArgs.sub;
    if(str==null || sub==null)
        throw ArgumentNullException("par or sub");

    var result;
    try{
        var reg = new RegExp(sub, 'g');
        var matchs = str.match(reg)||[];
        result = matchs.length;
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
