var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./define/LogicFlowControl", "./AbstractLFCDocumentParser"], function (require, exports, LogicFlowControl_1, AbstractLFCDocumentParser_1) {
    "use strict";
    /**
     * LFC文件解析器
     */
    var LFCDocumentParser = (function (_super) {
        __extends(LFCDocumentParser, _super);
        function LFCDocumentParser() {
            _super.call(this);
        }
        ;
        LFCDocumentParser.prototype.createDocumentObject = function () {
            return new LogicFlowControl_1.LogicFlowControl();
        };
        return LFCDocumentParser;
    }(AbstractLFCDocumentParser_1.AbstractLFCDocumentParser));
    exports.LFCDocumentParser = LFCDocumentParser;
    ;
});
//# sourceMappingURL=LFCDocumentParser.js.map