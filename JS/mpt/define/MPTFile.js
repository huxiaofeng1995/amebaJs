var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../lib/HashMap", "./MPTStep"], function (require, exports, HashMap_1, MPTStep_1) {
    "use strict";
    var MPTFile = (function (_super) {
        __extends(MPTFile, _super);
        function MPTFile() {
            _super.call(this);
            this.inArgMap = new HashMap_1.HashMap();
            this.outArgMap = new HashMap_1.HashMap();
        }
        ;
        //-----------------------------------------------setter-------------------------
        MPTFile.prototype.setPath = function (path) {
            this.path = path;
        };
        ;
        MPTFile.prototype.setInArgMap = function (inArgMap) {
            this.inArgMap = inArgMap;
        };
        ;
        MPTFile.prototype.setOutArgMap = function (outArgMap) {
            this.outArgMap = outArgMap;
        };
        ;
        MPTFile.prototype.setMapping = function (mapping) {
            this.mapping = mapping;
        };
        ;
        //-----------------------------------------------getter-------------------------
        MPTFile.prototype.getPath = function () {
            return this.path;
        };
        ;
        MPTFile.prototype.getInArgMap = function () {
            return this.inArgMap;
        };
        ;
        MPTFile.prototype.getOutArgMap = function () {
            return this.outArgMap;
        };
        ;
        MPTFile.prototype.getMapping = function () {
            return this.mapping;
        };
        ;
        return MPTFile;
    }(MPTStep_1.MPTStep));
    exports.MPTFile = MPTFile;
    ;
});
//# sourceMappingURL=MPTFile.js.map