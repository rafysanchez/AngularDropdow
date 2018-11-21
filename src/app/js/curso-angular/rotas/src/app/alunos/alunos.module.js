System.register(['./guards/aluno-detalhe.resolver', './../guards/alunos-deactivate.guard', '@angular/forms', './alunos.service', '@angular/core', '@angular/common', './alunos.component', './aluno-form/aluno-form.component', './aluno-detalhe/aluno-detalhe.component', './alunos.routing.module'], function(exports_1, context_1) {
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
    var aluno_detalhe_resolver_1, alunos_deactivate_guard_1, forms_1, alunos_service_1, core_1, common_1, alunos_component_1, aluno_form_component_1, aluno_detalhe_component_1, alunos_routing_module_1;
    var AlunosModule;
    return {
        setters:[
            function (aluno_detalhe_resolver_1_1) {
                aluno_detalhe_resolver_1 = aluno_detalhe_resolver_1_1;
            },
            function (alunos_deactivate_guard_1_1) {
                alunos_deactivate_guard_1 = alunos_deactivate_guard_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (alunos_service_1_1) {
                alunos_service_1 = alunos_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (alunos_component_1_1) {
                alunos_component_1 = alunos_component_1_1;
            },
            function (aluno_form_component_1_1) {
                aluno_form_component_1 = aluno_form_component_1_1;
            },
            function (aluno_detalhe_component_1_1) {
                aluno_detalhe_component_1 = aluno_detalhe_component_1_1;
            },
            function (alunos_routing_module_1_1) {
                alunos_routing_module_1 = alunos_routing_module_1_1;
            }],
        execute: function() {
            AlunosModule = (function () {
                function AlunosModule() {
                }
                AlunosModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            alunos_routing_module_1.AlunosRoutingModule
                        ],
                        exports: [],
                        declarations: [
                            alunos_component_1.AlunosComponent,
                            aluno_form_component_1.AlunoFormComponent,
                            aluno_detalhe_component_1.AlunoDetalheComponent
                        ],
                        providers: [
                            alunos_service_1.AlunosService,
                            alunos_deactivate_guard_1.AlunosDeactivateGuard,
                            aluno_detalhe_resolver_1.AlunoDetalheResolver
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlunosModule);
                return AlunosModule;
            }());
            exports_1("AlunosModule", AlunosModule);
        }
    }
});
//# sourceMappingURL=alunos.module.js.map