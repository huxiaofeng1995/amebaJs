function metadata() {
    return {
        name: "IsCtnSBC",
        description: "判断字符串中是否含有全角字符，如果包含全角字符，走true出口，不包含，走false出口。",
        version: "1.0",
        inArgs: [
        "inStr",
        ],
        outArgs: []
    };
}

function execute(inArgs, resultCallback) {

    var str = inArgs.inStr;
    if(str==null)
        throw new ArgumentNullException("inStr");
    
    var result;
    try{
        result = hasSBCCase(str)?"true":"false";
    }catch(err){
        throw new RuntimeException(err);
    }
    
    resultCallback({
        end: result,
        outArgs: {}
    });
}

function hasSBCCase(str)
{
    for (var i = 0; i < str.length; i++)
    {
        var c = str.charCodeAt(i);
        if (c == 12288 || c == 12290)
            return true;
        if (c > 65280 && c < 65375)
            return true;
    }
    return false;
}

module.exports.metadata=metadata;
module.exports.execute=execute;

