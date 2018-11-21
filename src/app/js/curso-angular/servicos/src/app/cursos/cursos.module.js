System.register(['@angular/common', '@angular/core', './cursos.component'], function(exports_1, context_1) {
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
    var common_1, core_1, cursos_component_1;
    var CursosModule;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cursos_component_1_1) {
                cursos_component_1 = cursos_component_1_1;
            }],
        execute: function() {
            CursosModule = (function () {
                function CursosModule() {
                }
                CursosModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            cursos_component_1.CursosComponent
                        ],
                        imports: [
                            common_1.CommonModule
                        ],
                        exports: [cursos_component_1.CursosComponent] //,
                    }), 
                    __metadata('design:paramtypes', [])
                ], CursosModule);
                return CursosModule;
            }());
            exports_1("CursosModule", CursosModule);
        }
    }
});
//# sourceMappingURL=cursos.module.js.map