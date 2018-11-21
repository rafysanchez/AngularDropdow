System.register(['@angular/common', '@angular/core', './criar-curso.component', '../receber-curso-criado/receber-curso-criado.component'], function(exports_1, context_1) {
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
    var common_1, core_1, criar_curso_component_1, receber_curso_criado_component_1;
    var CriarCursoModule;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (criar_curso_component_1_1) {
                criar_curso_component_1 = criar_curso_component_1_1;
            },
            function (receber_curso_criado_component_1_1) {
                receber_curso_criado_component_1 = receber_curso_criado_component_1_1;
            }],
        execute: function() {
            CriarCursoModule = (function () {
                function CriarCursoModule() {
                }
                CriarCursoModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            criar_curso_component_1.CriarCursoComponent,
                            receber_curso_criado_component_1.ReceberCursoCriadoComponent
                        ],
                        imports: [
                            common_1.CommonModule
                        ],
                        exports: [criar_curso_component_1.CriarCursoComponent] //,
                    }), 
                    __metadata('design:paramtypes', [])
                ], CriarCursoModule);
                return CriarCursoModule;
            }());
            exports_1("CriarCursoModule", CriarCursoModule);
        }
    }
});
//# sourceMappingURL=criar-curso.module.js.map