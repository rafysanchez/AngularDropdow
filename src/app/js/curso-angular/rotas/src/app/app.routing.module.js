System.register(['./pagina-nao-encontrada/pagina-nao-encontrada.component', './guards/cursos.guard', '@angular/core', '@angular/router', './home/home.component', './login/login.component', './guards/auth.guard'], function(exports_1, context_1) {
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
    var pagina_nao_encontrada_component_1, cursos_guard_1, core_1, router_1, home_component_1, login_component_1, auth_guard_1;
    var appRoutes, AppRoutingModule;
    return {
        setters:[
            function (pagina_nao_encontrada_component_1_1) {
                pagina_nao_encontrada_component_1 = pagina_nao_encontrada_component_1_1;
            },
            function (cursos_guard_1_1) {
                cursos_guard_1 = cursos_guard_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'cursos',
                    loadChildren: 'app/cursos/cursos.module#CursosModule',
                    canActivate: [auth_guard_1.AuthGuard],
                    canActivateChild: [cursos_guard_1.CursosGuard],
                    canLoad: [auth_guard_1.AuthGuard]
                },
                { path: 'alunos',
                    loadChildren: 'app/alunos/alunos.module#AlunosModule',
                    canActivate: [auth_guard_1.AuthGuard],
                    //canActivateChild: [AlunosGuard]
                    canLoad: [auth_guard_1.AuthGuard]
                },
                //{ path: 'cursos', component: CursosComponent },
                //{ path: 'curso/:id', component: CursoDetalheComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
                { path: 'home', component: home_component_1.HomeComponent,
                    canActivate: [auth_guard_1.AuthGuard]
                },
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: '**', component: pagina_nao_encontrada_component_1.PaginaNaoEncontradaComponent } //, canActivate: [AuthGuard]}
            ];
            AppRoutingModule = (function () {
                function AppRoutingModule() {
                }
                AppRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [router_1.RouterModule.forRoot(appRoutes, { useHash: true })],
                        exports: [router_1.RouterModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppRoutingModule);
                return AppRoutingModule;
            }());
            exports_1("AppRoutingModule", AppRoutingModule);
        }
    }
});
//# sourceMappingURL=app.routing.module.js.map