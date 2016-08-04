class HashMap {
    
    private map: Object;

    public constructor() {
        this.map = {};
    };

    public put(key: string, value: any): void {
        this.map[key] = value;
    };
    public get(key: string): any {
        return this.map[key];
    };
    public remove(key: string): boolean {
        return delete this.map[key];
    };
    public removeAll(): void {
        this.map = {};
    };
    public keySet(): Array<string>{
        var _keys = [];
        for(var i in this.map){
            _keys.push(i);
        }
        return _keys;
    }
}

export {HashMap};