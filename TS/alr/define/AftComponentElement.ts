import {ComponentElement} from "./ComponentElement";
import {HashMap} from "../../lib/HashMap";

class AftComponentElement extends ComponentElement {
    private path: string;
    private mapping: HashMap;

    public getMapping(): HashMap {
        return this.mapping;
    }
    public addMapping(target: string, source: string): void {
        this.mapping.put(target, source);
    }
    public getPath(): string {
        return this.path;
    }
    public setPath(path: string): void {
        this.path = path;
    }
}

export {AftComponentElement};