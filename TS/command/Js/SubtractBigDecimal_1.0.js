function metadata() {
    return {
        name: "SubtractBigDecimal",
        description: "两个数字字符串进行相减",
        version: "1.0",
        inArgs: [
        "decimalLiteral1",
        "decimalLiteral2",
        ],
        outArgs: [
        "result",
        ]
    };
}

var Decimal = require('./decimal.js');
Decimal.precision = 128;

function execute(inArgs, resultCallback) {

	var str1 = inArgs.decimalLiteral1;
	var str2 = inArgs.decimalLiteral2;
	if(str1==null|| str2==null)
		throw new ArgumentNullException("decimalLiteral1 or decimalLiteral2");

    var result;
    try{
        var d1 = new Decimal(str1);
        var d2 = new Decimal(str2);
        var r1 = Decimal.sub(d1, d2);
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
