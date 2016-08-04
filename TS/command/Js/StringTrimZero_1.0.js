function metadata() {
    return {
        name: "StringTrimZero",
        description: "去除字符串前后字符。包含3个入参和1个出参，入参inStr是输入字符串，ch是要去除的字符，LR是左边还是右边去除，出参result是处理后的字符串。",
        version: "1.0",
        inArgs: [
        "inStr",
        "ch",
        "LR"
        ],
        outArgs: [
        "result",
        ]
    };
}

function execute(inArgs, resultCallback) {

    var str = inArgs.inStr;
    var c = inArgs.ch;
    var lr = inArgs.LR;
    if(str==null || c==null || lr==null)
        throw new ArgumentNullException("inStr, ch or LR");
    
    var result;
    try{
        result = trimChar(str, c, lr);
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

function trimChar(str, c, lr){
    var lr = lr.toLowerCase();
    if(lr=="l"){
        while(true){
            if(str.length==1)
                break;
            if(c!=str.charAt(0))
                break;
            str = str.substring(1, str.length);
        }
    }
    if(lr=="r"){
        while(true){
            if(str.length==1)
                break;
            if(c!=str.charAt(str.length-1))
                break;
            str = str.substring(0, str.length-1);
        }
    }
    if(lr=="lr"){
        str=trimChar(str, c, "l");
        str=trimChar(str, c, "r");
    }
    return str;
}

module.exports.metadata=metadata;
module.exports.execute=execute;
