var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../runtime/Context", "./AbstractLFCProcessDefinitionAdapter"], function (require, exports, Context_1, AbstractLFCProcessDefinitionAdapter_1) {
    "use strict";
    var LFCProcessDefinitionAdapter = (function (_super) {
        __extends(LFCProcessDefinitionAdapter, _super);
        function LFCProcessDefinitionAdapter() {
            _super.call(this);
        }
        ;
        LFCProcessDefinitionAdapter.prototype.parse = function (path, inputStream, callback) {
            Context_1.Context.getCurrent().get("ResourceDocumentTable").getDocument(path, "LogicFlowControl", function (lfc) {
                callback(lfc);
            });
        };
        ;
        LFCProcessDefinitionAdapter.prototype.getFileExtension = function () {
            return 'lfc';
        };
        ;
        return LFCProcessDefinitionAdapter;
    }(AbstractLFCProcessDefinitionAdapter_1.AbstractLFCProcessDefinitionAdapter));
    exports.LFCProcessDefinitionAdapter = LFCProcessDefinitionAdapter;
    ;
});
//# sourceMappingURL=LFCProcessDefinitionAdapter.js.map