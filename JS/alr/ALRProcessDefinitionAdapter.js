var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./AbstractALRProcessDefinitionAdapter", "../runtime/Context"], function (require, exports, AbstractALRProcessDefinitionAdapter_1, Context_1) {
    "use strict";
    var ALRProcessDefinitionAdapter = (function (_super) {
        __extends(ALRProcessDefinitionAdapter, _super);
        function ALRProcessDefinitionAdapter() {
            _super.apply(this, arguments);
        }
        ALRProcessDefinitionAdapter.prototype.getFileExtension = function () {
            return "alr";
        };
        ALRProcessDefinitionAdapter.prototype.parse = function (path, input, callback) {
            Context_1.Context.getCurrent().get("ResourceDocumentTable").getDocument(path, "AgreeLogicRule", function (alr) {
                callback(alr);
            });
        };
        return ALRProcessDefinitionAdapter;
    }(AbstractALRProcessDefinitionAdapter_1.AbstractALRProcessDefinitionAdapter));
    exports.ALRProcessDefinitionAdapter = ALRProcessDefinitionAdapter;
});
//# sourceMappingURL=ALRProcessDefinitionAdapter.js.map