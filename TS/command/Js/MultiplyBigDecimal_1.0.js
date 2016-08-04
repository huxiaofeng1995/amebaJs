function metadata() {
    return {
        name: "MultiplyBigDecimal",
        description: "两个数字字符串进行乘法运算。包含3个入参和1个出参，入参decimalLiteral1，decimalLiteral2是2个数字字符串，length是保留的长度，出参result是运算后的数字字符串。",
        version: "1.0",
        inArgs: [
        "decimalLiteral1",
        "decimalLiteral2",
        "length"
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
	var length = inArgs.length;
	if(str1==null|| str2==null)
        throw new ArgumentNullException("decimalLiteral1 or decimalLiteral2");

    var result;
    try{
        var d1 = new Decimal(str1);
        var d2 = new Decimal(str2);
        var r1 = Decimal.mul(d1, d2);
        if(length!=null){
            var digits = parseInt(length);
            r1 = r1.toFixed(parseInt(digits));
        }
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
