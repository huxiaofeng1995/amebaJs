import {HashMap} from "../../lib/HashMap";

class SedaMappingTargetEntry {
    private path: string;
    private mapping: HashMap;

    public getPath(): string {
        return this.path;
    }
    public getMapping(): HashMap {
        return this.mapping;
    }

    public setPath(path: string): void {
        this.path = path;
    }
    public setMapping(mapping: HashMap): void {
        this.mapping = mapping;
    }
}

export {SedaMappingTargetEntry};