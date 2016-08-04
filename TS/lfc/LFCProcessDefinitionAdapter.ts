import {Context} from "../runtime/Context";
import {AbstractLFCProcessDefinitionAdapter} from "./AbstractLFCProcessDefinitionAdapter";

class LFCProcessDefinitionAdapter extends AbstractLFCProcessDefinitionAdapter {
    public constructor() {
        super();
    };

    public parse(path: string, inputStream: string, callback: Function): void {
        Context.getCurrent().get("ResourceDocumentTable").getDocument(path, "LogicFlowControl", function(lfc) {
            callback(lfc);
        });
    };
    
    public getFileExtension(): string {
        return 'lfc';
    };
};

export {LFCProcessDefinitionAdapter};

