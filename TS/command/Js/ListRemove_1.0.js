function metadata() {
    return {
        name: "ListRemoveOne",
        description: "从集合删除元素",
        version: "1.0",
        inArgs: [
        "list",
        "obj"
        ],
        outArgs: [
        "resultList",
        ]
    };
}

function execute(inArgs, resultCallback) {

    var list = inArgs.list;
    var obj = inArgs.obj;
    if(list==null || obj==null)
        throw new ArgumentNullException("list or obj");

    try{
        if(obj instanceof Array){
            for (var i = 0; i < obj.length; i++) {
                var tmpObj = obj[i];
                list.remove(tmpObj);
            };
        }else{
            list.remove(obj);
        }
    }catch(err){
        throw new RuntimeException(err);
    }

    resultCallback({
        end: "success",
        outArgs: {
            result: list,
        }
    });
}

Array.prototype.remove = function(ele) {
    var index = this.indexOf(ele);
    if (index > -1) {
        this.splice(index, 1);
    };
}

module.exports.metadata=metadata;
module.exports.execute=execute;
