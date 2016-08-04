function metadata() {
    return {
        name: "StringCompress",
        description: "对字符串进行压缩。包含1个入参和1个出参，入参raw是源字符串，出参result是压缩后的字符串。",
        version: "1.0",
        inArgs: [
        "raw",
        ],
        outArgs: [
        "result",
        ]
    };
}

var JSZip = require('./jszip_2.3.0.js');

function execute(inArgs, resultCallback) {

    var raw = inArgs.raw;
    if(raw==null)
        throw new ArgumentNullException("raw");

    var base64zip;
    try{
        var zip = new JSZip();
        zip.file("tmp.txt", raw);
        base64zip = zip.generate();

        //var newZip = new JSZip(base64zip, {base64: true});
        //var newContent = newZip.file("tmp.txt").asText();
        //console.log(newContent);
    }catch(err){
        throw new RuntimeException(err);
    }

    resultCallback({
        end: "success",
        outArgs: {
            result: base64zip
        }
    });
}

module.exports.metadata=metadata;
module.exports.execute=execute;
