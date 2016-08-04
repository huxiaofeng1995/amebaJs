
export function metadata() {
    return {
        name: "SetParameter",
        description: "设置参数",
        version: "1.0",
        inArgs: [
        ],
        outArgs: [
            "result"
        ]
    }
};

export function execute(inArgs, resultCallback) {
    var end, result;
    
    end = "success";
    result = "";
    
    resultCallback({
        end: end,
        outArgs: {
            "result": result
        }
    });
};