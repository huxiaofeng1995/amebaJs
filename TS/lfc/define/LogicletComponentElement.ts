import {HashMap} from "../../lib/HashMap";
import {ComponentElement} from "./ComponentElement";

/**
 * LFC文件中Component元素（一般组件）
 */
class LogicletComponentElement extends ComponentElement {
    private name: string;

    public constructor() {
        super();
    };

    //-----------------------------setter-------------------------
    public setName(name: string): void {
        this.name = name;
    };

    //-----------------------------getter-------------------------
    public getName(): string {
        return this.name;
    }
};

export {LogicletComponentElement};