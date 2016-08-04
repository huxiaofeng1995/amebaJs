function metadata() {
    return {
        name: "StringToDBC",
        description: "将字符串中的全角字符转换为半角字符。包含1个入参和1个出参，入参inStr是传入的字符串，出参result是处理后的字符串。",
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

    var inStr = inArgs.inStr;
    if(inStr==null)
        throw new ArgumentNullException("inStr");

    var result;
    try{
        result = toDBC(inStr);
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

function toDBC(str){
    if(str==null)
        return null;

    var result="";
    for (var i = 0; i < str.length; i++){
        var charCode = str.charCodeAt(i);
        if (charCode== 12288){
            result += String.fromCharCode(32);
        }else if (charCode== 12290){
            result += String.fromCharCode(46);
        }else if (charCode> 65280 && charCode < 65375){
            result += String.fromCharCode(charCode-65248);
        }else{
            result += str[i];
        }
    }
    return result;
}

module.exports.metadata=metadata;
module.exports.execute=execute;
