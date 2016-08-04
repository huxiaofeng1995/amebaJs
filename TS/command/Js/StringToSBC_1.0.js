function metadata() {
    return {
        name: "StringToSBC",
        description: "将字符串中的半角字符转换为全角字符。包含1个入参和1个出参，入参inStr是传入的字符串，出参result是处理后的字符串。",
        version: "1.0",
        inArgs: [
        "inStr",
        ],
        outArgs: [
        "result",
        ]
    };
}

function execute(inArgs, resultCallback) {

    if(inArgs.inStr==null)
        throw new ArgumentNullException("inStr");

    var result;
    try{
        result = toSBC(inArgs.inStr);
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

function toSBC(str){
    if(str==null)
        return null;

    var result="";
    for (var i = 0; i < str.length; i++){
        var charCode = str.charCodeAt(i);
        if (charCode == 32){
            result+=String.fromCharCode(12288);
        }else if (charCode == 46){
            result+=String.fromCharCode(12290);
        }else if (charCode < 127){
            result+=String.fromCharCode(charCode + 65248);
        }else{
            result+=str[i];
        }
    }
    return result;
}

module.exports.metadata=metadata;
module.exports.execute=execute;
