import {HashMap} from "../../lib/HashMap";
import {ComponentElement} from "./ComponentElement";

/**
 * LFC文件中Component元素（LFC组件）
 */
class LFCComponentElement extends ComponentElement {
    private path: string;
    private mapping: HashMap;

    public constructor() {
        super();
    };

    //---------------------------------------------adder--------------------------
    public addMapping(target: string, source: string): void {
        if(this.mapping == null) {
            this.mapping = new HashMap();
        }
        this.mapping.put(target, source);
    }

    //----------------------------------------------setter-------------------------
    public setPath(path: string): void {
        this.path = path;
    };

    //-----------------------------------------------getter------------------------
    public getPath(): string {
        return this.path;
    };
};

export {LFCComponentElement};