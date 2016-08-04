var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./AbstractSedaEntry"], function (require, exports, AbstractSedaEntry_1) {
    "use strict";
    var SedaMptTargetEntry = (function (_super) {
        __extends(SedaMptTargetEntry, _super);
        function SedaMptTargetEntry() {
            _super.apply(this, arguments);
        }
        return SedaMptTargetEntry;
    }(AbstractSedaEntry_1.AbstractSedaEntry));
    exports.SedaMptTargetEntry = SedaMptTargetEntry;
});
//# sourceMappingURL=SedaMptTargetEntry.js.map