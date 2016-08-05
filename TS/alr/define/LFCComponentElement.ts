import {ComponentElement} from "./ComponentElement";
import {HashMap} from "../../lib/HashMap";

class LFCComponentElement extends ComponentElement {
    private path: string;
    private mapping: HashMap;

    public addMapping(target: string, source: string): void {
        this.mapping.put(target, source);
    }

    public getMapping(): HashMap {
        return this.mapping;
    }
    public getPath(): string {
        return this.path;
    }

    public setPath(path: string): void {
        this.path = path;
    }
}

export {LFCComponentElement};