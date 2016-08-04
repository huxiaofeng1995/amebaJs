import {LogicFlowControl} from "./define/LogicFlowControl";
import {AbstractLFCDocumentParser} from "./AbstractLFCDocumentParser";

declare var X2JS

/**
 * LFC文件解析器
 */
class LFCDocumentParser extends AbstractLFCDocumentParser<LogicFlowControl> {
    public constructor() {
        super();
    };

    protected createDocumentObject(): LogicFlowControl {
        return new LogicFlowControl();
    }
};

export {LFCDocumentParser};