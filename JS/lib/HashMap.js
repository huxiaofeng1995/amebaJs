define(["require", "exports"], function (require, exports) {
    "use strict";
    var HashMap = (function () {
        function HashMap() {
            this.map = {};
        }
        ;
        HashMap.prototype.put = function (key, value) {
            this.map[key] = value;
        };
        ;
        HashMap.prototype.get = function (key) {
            return this.map[key];
        };
        ;
        HashMap.prototype.remove = function (key) {
            return delete this.map[key];
        };
        ;
        HashMap.prototype.removeAll = function () {
            this.map = {};
        };
        ;
        HashMap.prototype.keySet = function () {
            var _keys = [];
            for (var i in this.map) {
                _keys.push(i);
            }
            return _keys;
        };
        return HashMap;
    }());
    exports.HashMap = HashMap;
});
//# sourceMappingURL=HashMap.js.map