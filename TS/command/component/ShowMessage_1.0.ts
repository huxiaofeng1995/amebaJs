export function metadata() {
    return {
        name: "ShowMessage",
        description: "显示信息",
        version: "1.0",
        inArgs: [
            "type",
            "content"
        ],
    }
};
export function execute(inArgs, resultCallback) {
    var type, content, end;
    
    type = inArgs.get("type");
    content = inArgs.get("content");
    if(type === "info") {
        console.log(content);
    }
    
    end = "success";
    
    resultCallback({
        end: end
    });
}