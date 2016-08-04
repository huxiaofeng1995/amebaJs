define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * LFC文件中的InArg元素或OutArg元素
     */
    var ArgElement = (function () {
        function ArgElement() {
        }
        ;
        //---------------------------------------------setter-----------------------------------------------------
        ArgElement.prototype.setName = function (name) {
            this.name = name;
        };
        ;
        ArgElement.prototype.setContent = function (content) {
            this.content = content;
        };
        ;
        ArgElement.prototype.setCaption = function (caption) {
            this.caption = caption;
        };
        //--------------------------------------------getter-------------------------------------------------------
        ArgElement.prototype.getName = function () {
            return this.name;
        };
        ;
        ArgElement.prototype.getContent = function () {
            return this.content;
        };
        ;
        return ArgElement;
    }());
    exports.ArgElement = ArgElement;
    ;
});
//# sourceMappingURL=ArgElement.js.map