function metadata() {
    return {
        name: "DESHandler",
        description: "对一个字符串进行DES加解密。包含2个入参和1个出参，入参source是输入的源字符串，mode标识加解密，encrypt为DES加密标志；decrypt为DES解密标志;出参output是加解密后的字符串。",
        version: "1.0",
        inArgs: [
        "source",
        "key",
        "mode"
        ],
        outArgs: [
        "output",
        ]
    };
}

function execute(inArgs, resultCallback) {

    var str =inArgs.source;
    var key = inArgs.key;
    var mode = inArgs.mode;
    if(str==null || key==null || mode==null)
        throw new ArgumentNullException("str、key or mode");

    var result="";
    try{


    }catch(err){
        throw new RuntimeException(err);
    }

    resultCallback({
        end: "success",
        outArgs: {
            output: result,
        }
    });
}

module.exports.metadata=metadata;
module.exports.execute=execute;
