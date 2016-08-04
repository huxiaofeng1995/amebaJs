function metadata() {
    return {
        name: "GetFileByteArrMD5String",
        description: "获取字节数组的MD5值，包含1个入参fileByteArray和1个出参result，fileByteArray是传入的字节数组，result是MD5字节数组后的字符串。",
        version: "1.0",
        inArgs: [
        "fileByteArray",
        ],
        outArgs: [
        "result",
        ]
    };
}

var md5Utils = require('./MD5Utils.js');

function execute(inArgs, resultCallback) {

    var bytes = inArgs.fileByteArray;
    if(bytes==null)
        throw new ArgumentNullException("fileByteArray");

    var result;
    try{
        result = md5Utils.GetBytesMd5(bytes);
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
