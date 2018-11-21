System.register(['@angular/core', '@angular/common', './cursos.component', './curso-detalhe/curso-detalhe.component', './curso-nao-encontrado/curso-nao-encontrado.component', './cursos.service', './cursos.routing.module', './curso-form/curso-form.component'], function(exports_1, context_1) {
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
    var core_1, common_1, cursos_component_1, curso_detalhe_component_1, curso_nao_encontrado_component_1, cursos_service_1, cursos_routing_module_1, curso_form_component_1;
    var CursosModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (cursos_component_1_1) {
                cursos_component_1 = cursos_component_1_1;
            },
            function (curso_detalhe_component_1_1) {
                curso_detalhe_component_1 = curso_detalhe_component_1_1;
            },
            function (curso_nao_encontrado_component_1_1) {
                curso_nao_encontrado_component_1 = curso_nao_encontrado_component_1_1;
            },
            function (cursos_service_1_1) {
                cursos_service_1 = cursos_service_1_1;
            },
            function (cursos_routing_module_1_1) {
                cursos_routing_module_1 = cursos_routing_module_1_1;
            },
            function (curso_form_component_1_1) {
                curso_form_component_1 = curso_form_component_1_1;
            }],
        execute: function() {
            CursosModule = (function () {
                function CursosModule() {
                }
                CursosModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            cursos_routing_module_1.CursosRoutingModule
                        ],
                        exports: [],
                        declarations: [
                            cursos_component_1.CursosComponent,
                            curso_detalhe_component_1.CursoDetalheComponent,
                            curso_nao_encontrado_component_1.CursoNaoEncontradoComponent,
                            curso_form_component_1.CursoFormComponent
                        ],
                        providers: [cursos_service_1.CursosService],
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