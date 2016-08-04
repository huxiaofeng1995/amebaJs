function metadata() {
    return {
        name: "Base64Encode",
        description: "将一个字节数组base64编码后得到新的字符串。包含1个入参base64Data和1个出参base64Data，入参base64Data是即将进行base64编码的字节数组，出参base64Data是编码后的字符串。",
        version: "1.0",
        inArgs: [
        "base64Data",
        ],
        outArgs: [
        "base64String",
        ]
    };
}

function execute(inArgs, resultCallback) {

    var str = inArgs.base64Data;
    if(str==null)
        throw new ArgumentNullException("base64String");

    var result;
    try{
        result = base64encode(str);

    }catch(err){
        throw new RuntimeException(err);
    }

    resultCallback({
        end: "success",
        outArgs: {
            base64String: result,
        }
    });
}


var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; 
function base64encode(str){  
    var out, i, len;  
    var c1, c2, c3;  
    len = str.length;  
    i = 0;  
    out = "";  
    while (i < len) {  
        c1 = str.charCodeAt(i++) & 0xff;  
        if (i == len) {  
            out += base64EncodeChars.charAt(c1 >> 2);  
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);  
            out += "==";  
            break;  
        }  
        c2 = str.charCodeAt(i++);  
        if (i == len) {  
            out += base64EncodeChars.charAt(c1 >> 2);  
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));  
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);  
            out += "=";  
            break;  
        }  
        c3 = str.charCodeAt(i++);  
        out += base64EncodeChars.charAt(c1 >> 2);  
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));  
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));  
        out += base64EncodeChars.charAt(c3 & 0x3F);  
    }  
    return out;  
} 

module.exports.metadata=metadata;
module.exports.execute=execute;
