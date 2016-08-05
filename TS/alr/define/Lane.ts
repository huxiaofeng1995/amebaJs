import {HashMap} from "../../lib/HashMap";

class Lane {
    private name: string;
    private width: string;
    private containsNodesId: Array<string> = new Array();
    private data: HashMap = new HashMap();
    
    public getData(): HashMap {
        return this.data;
    }
    public addData(key: string, value: Object) {
        this.data.put(key, value);
    }
    public clearData(): void {
        this.data.removeAll();
    }
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getWidth(): string {
        return this.width;
    }
    public setWidth(width: string): void {
        this.width = width;
    }
    public getContainsNodesId(): Array<string> {
        return this.containsNodesId;
    }
    public addNodeId(nodeId: string): void {
        this.containsNodesId.push(nodeId);
    }
}

export {Lane};