
/**
 * LFC文件中的InArg元素或OutArg元素
 */
class ArgElement {
    private name: string;
    private content: string;
    private caption: string;

    public constructor() {};

    //---------------------------------------------setter-----------------------------------------------------
    public setName(name: string): void {
        this.name = name;
    };
    public setContent(content: string): void {
        this.content = content;
    };
    public setCaption(caption: string): void {
        this.caption = caption;
    }
    
    //--------------------------------------------getter-------------------------------------------------------
    public getName(): string {
        return this.name;
    };
    public getContent(): string {
        return this.content;
    };
};

export {ArgElement};