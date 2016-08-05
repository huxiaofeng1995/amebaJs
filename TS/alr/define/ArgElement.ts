
class ArgElement {
    private caption: string;
    private content: string;
    private name: string;
    
    public getName(): string {
        return this.name;
    }
    public getCaption(): string {
        return this.caption;
    }
    public getContent(): string {
        return this.content;
    }

    public setName(name: string): void {
        this.name = name;
    }
    public setCaption(caption): void {
        this.caption = caption;
    }
    public setContent(content: string): void {
        this.content = content;
    }
}

export {ArgElement};