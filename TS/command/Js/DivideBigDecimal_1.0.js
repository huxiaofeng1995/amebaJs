function metadata() {
    return {
        name: "DivideBigDecimal",
        description: "用于处理数字字符串除法，入参包含三个参数，第一个为被除数，第二个为除数，第三个为结果保留的位数。",
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
        var r1 = Decimal.div(d1, d2);
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
