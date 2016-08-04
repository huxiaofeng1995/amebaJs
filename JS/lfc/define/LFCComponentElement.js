var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../lib/HashMap", "./ComponentElement"], function (require, exports, HashMap_1, ComponentElement_1) {
    "use strict";
    /**
     * LFC文件中Component元素（LFC组件）
     */
    var LFCComponentElement = (function (_super) {
        __extends(LFCComponentElement, _super);
        function LFCComponentElement() {
            _super.call(this);
        }
        ;
        //---------------------------------------------adder--------------------------
        LFCComponentElement.prototype.addMapping = function (target, source) {
            if (this.mapping == null) {
                this.mapping = new HashMap_1.HashMap();
            }
            this.mapping.put(target, source);
        };
        //----------------------------------------------setter-------------------------
        LFCComponentElement.prototype.setPath = function (path) {
            this.path = path;
        };
        ;
        //-----------------------------------------------getter------------------------
        LFCComponentElement.prototype.getPath = function () {
            return this.path;
        };
        ;
        return LFCComponentElement;
    }(ComponentElement_1.ComponentElement));
    exports.LFCComponentElement = LFCComponentElement;
    ;
});
//# sourceMappingURL=LFCComponentElement.js.map