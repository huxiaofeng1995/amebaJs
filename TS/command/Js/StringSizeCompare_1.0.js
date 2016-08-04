function metadata() {
    return {
        name: "StringSizeCompare",
        description: "比较两个数字字符串的大小，此组件有三个出口分别是大于，小于和等于对应1,2,3相应出口。",
        version: "1.0",
        inArgs: [
        "decimalLiteral1",
        "decimalLiteral2"
        ],
        outArgs: []
    };
}

var Decimal = require('./decimal.js');
Decimal.precision = 128;

function execute(inArgs, resultCallback) {

	var str1 = inArgs.decimalLiteral1;
	var str2 = inArgs.decimalLiteral2;
    if(str1==null || str2 == null)
        throw new ArgumentNullException("decimalLiteral1 or decimalLiteral2");

    //"positive""minus""zero"
    var result;
    try{
        var d1 = new Decimal(str1);
        var d2 = new Decimal(str2);
        var r1 =d1.comparedTo(d2);

        if(r1==1)
            result = "positive";
        else if(r1==-1)
            result = "minus";
        if(r1==0)
            result = "zero";
    }catch(err){
        throw new RuntimeException(err);
    }

    resultCallback({
        end: result,
        outArgs: {}
    });
}


module.exports.metadata=metadata;
module.exports.execute=execute;
