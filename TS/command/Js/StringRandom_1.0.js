function metadata() {
    return {
        name: "StringRandom",
        description: "获取指定位数的随机字符串。包含1个入参和1个出参，入参length是指定的位数，出参result是返回的结果字符串。",
        version: "1.0",
        inArgs: [
        "length",
        ],
        outArgs: [
        "result",
        ]
    };
}

function execute(inArgs, resultCallback) {

    var length = inArgs.length;
    if(length==null)
        throw new ArgumentNullException("length");

    var result="";
    try{
        while(result.length<length){
            result += GetRandomNum(0, 9);   
        }
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

function GetRandomNum(Min,Max)
{   
    var Range = Max - Min;   
    var Rand = Math.random();   
    return(Min + Math.round(Rand * Range));   
}   

module.exports.metadata=metadata;
module.exports.execute=execute;
