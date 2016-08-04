define(["require", "exports", "../../lib/HashMap"], function (require, exports, HashMap_1) {
    "use strict";
    var MPTStep = (function () {
        function MPTStep() {
            this.outNextMap = new HashMap_1.HashMap();
        }
        ;
        //-------------------------------------------------adder------------------------------
        MPTStep.prototype.addOutNext = function (id, next) {
            this.outNextMap.put(id, next);
        };
        ;
        //-------------------------------------------------setter-----------------------------
        MPTStep.prototype.setCaption = function (caption) {
            this.caption = caption;
        };
        ;
        MPTStep.prototype.setDescription = function (description) {
            this.description = description;
        };
        ;
        MPTStep.prototype.setExceptionNext = function (exceptionNext) {
            this.exceptionNext = exceptionNext;
        };
        ;
        MPTStep.prototype.setId = function (id) {
            this.id = id;
        };
        ;
        MPTStep.prototype.setOutNextMap = function (outNextMap) {
            this.outNextMap = outNextMap;
        };
        ;
        MPTStep.prototype.setShowId = function (showId) {
            this.showId = showId;
        };
        ;
        //-------------------------------------------------getter-----------------------------
        MPTStep.prototype.getCaption = function () {
            return this.caption;
        };
        ;
        MPTStep.prototype.getDescription = function () {
            return this.description;
        };
        ;
        MPTStep.prototype.getExceptionNext = function () {
            return this.exceptionNext;
        };
        ;
        MPTStep.prototype.getId = function () {
            return this.id;
        };
        ;
        MPTStep.prototype.getOutNextMap = function () {
            return this.outNextMap;
        };
        ;
        MPTStep.prototype.getShowId = function () {
            return this.showId;
        };
        ;
        return MPTStep;
    }());
    exports.MPTStep = MPTStep;
});
//# sourceMappingURL=MPTStep.js.map