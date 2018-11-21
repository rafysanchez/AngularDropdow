System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CamelCasePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CamelCasePipe = (function () {
                function CamelCasePipe() {
                }
                CamelCasePipe.prototype.transform = function (value, args) {
                    var values = value.split(' ');
                    var result = '';
                    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                        var v = values_1[_i];
                        result += this.capitalize(v) + ' ';
                    }
                    return result;
                };
                CamelCasePipe.prototype.capitalize = function (value) {
                    return value.substr(0, 1).toUpperCase() +
                        value.substr(1).toLowerCase();
                };
                CamelCasePipe = __decorate([
                    core_1.Pipe({
                        name: 'camelCase'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CamelCasePipe);
                return CamelCasePipe;
            }());
            exports_1("CamelCasePipe", CamelCasePipe);
        }
    }
});
//# sourceMappingURL=camel-case.pipe.js.map