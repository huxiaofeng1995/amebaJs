function metadata() {
    return {
        name: "ExtractFilename",
        description: "根据全路径提取文件名。包含2个入参和1个出参，入参path是传入的路径，retainSuffix是是否保持文件后缀名，出参filename是处理后得到的文件名。",
        version: "1.0",
        inArgs: [
        "retainSuffix",
        "path"
        ],
        outArgs: [
        "filename",
        ]
    };
}

function execute(inArgs, resultCallback) {

    var path = inArgs.path;
    var retainSurfix = inArgs.retainSuffix;
    if(path==null || path==null)
        throw new ArgumentNullException("retainSuffix or path");

    var filename;
    try{
        var tmp = path.split("\\");
        filename = tmp[tmp.length-1];
        if(retainSurfix!="true"){
            filename = filename.split(".")[0];
        }
    }catch(err){
        throw new RuntimeException(err);
    }

    resultCallback({
        end: "success",
        outArgs: {
            filename: filename,
        }
    });
}

module.exports.metadata=metadata;
module.exports.execute=execute;
