import {HashMap} from "../../lib/HashMap";
import {MPTFile} from "./MPTFile";

class UIFile extends MPTFile {
    private target: string;

    public constructor() {
        super();
    };

    //------------------------------------setter---------------------
    public setTarget(target: string): void {
        this.target = target;
    }
    //------------------------------------getter---------------------
    public getTarget(): string {
        return this.target;
    }
};

export {UIFile};