function metadata() {
    return {
        name: "StringRound",
        description: "两个数字字符串进行相减",
        version: "1.0",
        inArgs: [
        "num",
        "scale",
        ],
        outArgs: [
        "result",
        ]
    };
}

var Decimal = require('./decimal.js');
Decimal.precision = 128;

function execute(inArgs, resultCallback) {

	var str1 = inArgs.num;
	var str2 = inArgs.scale;
	if(str1==null|| str2==null)
		throw new ArgumentNullException("num or scale");

    var result;
    try{
        var scale = parseInt(str2);

        var d1 = new Decimal(str1);
        var r1 = d1.toFixed(scale);

        result = r1.toString();
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
