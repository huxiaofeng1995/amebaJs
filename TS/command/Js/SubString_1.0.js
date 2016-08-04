function metadata() {
    return {
        name: "SubString",
        description: "截取指定开始位置和结束位置的字符串",
        version: "1.0",
        inArgs: [
        "sourceString",
        "beginIndex",
        "endIndex"
        ],
        outArgs: [
        "newString",
        ]
    };
}

function execute(inArgs, resultCallback) {

    var str = inArgs.sourceString;
    var beginIndex = inArgs.beginIndex;
    var endIndex = inArgs.endIndex;
    
    if(str==null || beginIndex==null || endIndex==null)
        throw new ArgumentNullException();"sourceString, beginIndex or endIndex");

    if(beginIndex>endIndex||endIndex>str.length)
        throw new ArgumentException("beginIndex or endIndex is illogical");

    var result;
    try{
        result = str.substring(beginIndex,endIndex);
    }catch(err){
        throw new RuntimeException(err);
    }

    resultCallback({
        end: "success",
        outArgs: {
            newString: result
        }
    });
}

module.exports.metadata=metadata;
module.exports.execute=execute;
