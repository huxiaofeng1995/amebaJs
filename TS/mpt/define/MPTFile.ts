import {HashMap} from "../../lib/HashMap";
import {MPTStep} from "./MPTStep";

class MPTFile extends MPTStep {
    private path: string;
    private inArgMap: HashMap = new HashMap();
    private outArgMap: HashMap = new HashMap();
    private mapping: HashMap;

    public constructor() {
        super();
    };

    //-----------------------------------------------setter-------------------------
    public setPath(path: string): void {
        this.path = path;
    };
    public setInArgMap(inArgMap: HashMap): void {
        this.inArgMap = inArgMap;
    };
    public setOutArgMap(outArgMap: HashMap): void {
        this.outArgMap = outArgMap;
    };
    public setMapping(mapping: HashMap): void {
        this.mapping = mapping;
    };
    //-----------------------------------------------getter-------------------------
    public getPath(): string {
        return this.path;
    };
    public getInArgMap(): HashMap {
        return this.inArgMap;
    };
    public getOutArgMap(): HashMap {
        return this.outArgMap;
    };
    public getMapping(): HashMap {
        return this.mapping;
    };
};

export {MPTFile};