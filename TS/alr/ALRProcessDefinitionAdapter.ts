import {AbstractALRProcessDefinitionAdapter} from "./AbstractALRProcessDefinitionAdapter";
import {Context} from "../runtime/Context";

class ALRProcessDefinitionAdapter extends AbstractALRProcessDefinitionAdapter {
    public getFileExtension(): string {
        return "alr";
    }

    public parse(path: string, input: string, callback: Function): void {
        Context.getCurrent().get("ResourceDocumentTable").getDocument(path, "AgreeLogicRule", function(alr) {
            callback(alr);
        });
    }
}

export {ALRProcessDefinitionAdapter};