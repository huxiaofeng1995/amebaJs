var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./MPTFile"], function (require, exports, MPTFile_1) {
    "use strict";
    var UIFile = (function (_super) {
        __extends(UIFile, _super);
        function UIFile() {
            _super.call(this);
        }
        ;
        //------------------------------------setter---------------------
        UIFile.prototype.setTarget = function (target) {
            this.target = target;
        };
        //------------------------------------getter---------------------
        UIFile.prototype.getTarget = function () {
            return this.target;
        };
        return UIFile;
    }(MPTFile_1.MPTFile));
    exports.UIFile = UIFile;
    ;
});
//# sourceMappingURL=UIFile.js.map