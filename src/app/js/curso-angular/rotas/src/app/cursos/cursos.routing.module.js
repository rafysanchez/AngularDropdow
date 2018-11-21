System.register(['@angular/core', '@angular/router', './cursos.component', './curso-detalhe/curso-detalhe.component', './curso-nao-encontrado/curso-nao-encontrado.component'], function(exports_1, context_1) {
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
    var core_1, router_1, cursos_component_1, curso_detalhe_component_1, curso_nao_encontrado_component_1;
    var cursosRoutes, CursosRoutingModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cursos_component_1_1) {
                cursos_component_1 = cursos_component_1_1;
            },
            function (curso_detalhe_component_1_1) {
                curso_detalhe_component_1 = curso_detalhe_component_1_1;
            },
            function (curso_nao_encontrado_component_1_1) {
                curso_nao_encontrado_component_1 = curso_nao_encontrado_component_1_1;
            }],
        execute: function() {
            cursosRoutes = [
                { path: '', component: cursos_component_1.CursosComponent },
                { path: 'naoEncontrado', component: curso_nao_encontrado_component_1.CursoNaoEncontradoComponent },
                { path: ':id', component: curso_detalhe_component_1.CursoDetalheComponent }
            ];
            CursosRoutingModule = (function () {
                function CursosRoutingModule() {
                }
                CursosRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [router_1.RouterModule.forChild(cursosRoutes)],
                        exports: [router_1.RouterModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CursosRoutingModule);
                return CursosRoutingModule;
            }());
            exports_1("CursosRoutingModule", CursosRoutingModule);
        }
    }
});
//# sourceMappingURL=cursos.routing.module.js.map