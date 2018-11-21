System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Technology;
    return {
        setters:[],
        execute: function() {
            Technology = (function () {
                function Technology(techId, techName) {
                    this.techId = techId;
                    this.techName = techName;
                }
                return Technology;
            }());
            exports_1("Technology", Technology);
        }
    }
});
//# sourceMappingURL=technology.js.map