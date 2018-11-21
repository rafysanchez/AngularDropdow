System.register(['./../guards/alunos-deactivate.guard', './../guards/alunos.guard', './aluno-form/aluno-form.component', './aluno-detalhe/aluno-detalhe.component', './alunos.component', '@angular/router', '@angular/core', './guards/aluno-detalhe.resolver'], function(exports_1, context_1) {
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
    var alunos_deactivate_guard_1, alunos_guard_1, aluno_form_component_1, aluno_detalhe_component_1, alunos_component_1, router_1, core_1, aluno_detalhe_resolver_1;
    var alunosRoutes, AlunosRoutingModule;
    return {
        setters:[
            function (alunos_deactivate_guard_1_1) {
                alunos_deactivate_guard_1 = alunos_deactivate_guard_1_1;
            },
            function (alunos_guard_1_1) {
                alunos_guard_1 = alunos_guard_1_1;
            },
            function (aluno_form_component_1_1) {
                aluno_form_component_1 = aluno_form_component_1_1;
            },
            function (aluno_detalhe_component_1_1) {
                aluno_detalhe_component_1 = aluno_detalhe_component_1_1;
            },
            function (alunos_component_1_1) {
                alunos_component_1 = alunos_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aluno_detalhe_resolver_1_1) {
                aluno_detalhe_resolver_1 = aluno_detalhe_resolver_1_1;
            }],
        execute: function() {
            alunosRoutes = [
                { path: '', component: alunos_component_1.AlunosComponent,
                    canActivateChild: [alunos_guard_1.AlunosGuard],
                    children: [
                        { path: 'novo', component: aluno_form_component_1.AlunoFormComponent },
                        { path: ':id', component: aluno_detalhe_component_1.AlunoDetalheComponent,
                            resolve: { aluno: aluno_detalhe_resolver_1.AlunoDetalheResolver }
                        },
                        { path: ':id/editar', component: aluno_form_component_1.AlunoFormComponent,
                            canDeactivate: [alunos_deactivate_guard_1.AlunosDeactivateGuard]
                        }
                    ] }
            ];
            AlunosRoutingModule = (function () {
                function AlunosRoutingModule() {
                }
                AlunosRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [router_1.RouterModule.forChild(alunosRoutes)],
                        exports: [router_1.RouterModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlunosRoutingModule);
                return AlunosRoutingModule;
            }());
            exports_1("AlunosRoutingModule", AlunosRoutingModule);
        }
    }
});
//# sourceMappingURL=alunos.routing.module.js.map