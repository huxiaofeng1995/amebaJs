function metadata() {
    return {
        name: "GetStringMD5",
        description: "计算字符串MD5值，包含1个入参source和1个出参result，source是传入的字符串，result是MD5后的字符串。",
        version: "1.0",
        inArgs: [
        "source",
        ],
        outArgs: [
        "result",
        ]
    };
}

var md5Utils = require('./MD5Utils.js');

function execute(inArgs, resultCallback) {

    var str = inArgs.source;
    if(str==null)
        throw new ArgumentNullException("source");

    var result;
    try{
        result = md5Utils.GetStringMd5(str);
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
