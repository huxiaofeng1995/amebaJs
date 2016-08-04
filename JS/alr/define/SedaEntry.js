define(["require", "exports"], function (require, exports) {
    "use strict";
    var SedaEntry = (function () {
        function SedaEntry() {
        }
        SedaEntry.prototype.getListAbstractEntry = function () {
            return this.listAbstractEntry;
        };
        SedaEntry.prototype.setListAbstractEntry = function (listAbstractEntry) {
            this.listAbstractEntry = listAbstractEntry;
        };
        return SedaEntry;
    }());
    exports.SedaEntry = SedaEntry;
});
//# sourceMappingURL=SedaEntry.js.map