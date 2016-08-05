import {ComponentElement} from "./ComponentElement";

class LogicletComponentElement extends ComponentElement {
    private name: string;

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
}

export {LogicletComponentElement};