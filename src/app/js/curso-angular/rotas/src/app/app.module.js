System.register(['./guards/cursos.guard', './guards/alunos.guard', './guards/auth.guard', '@angular/platform-browser', '@angular/core', '@angular/forms', '@angular/http', './app.component', './home/home.component', './login/login.component', './app.routing.module', './login/auth.service', './pagina-nao-encontrada/pagina-nao-encontrada.component'], function(exports_1, context_1) {
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
    var cursos_guard_1, alunos_guard_1, auth_guard_1, platform_browser_1, core_1, forms_1, http_1, app_component_1, home_component_1, login_component_1, app_routing_module_1, auth_service_1, pagina_nao_encontrada_component_1;
    var AppModule;
    return {
        setters:[
            function (cursos_guard_1_1) {
                cursos_guard_1 = cursos_guard_1_1;
            },
            function (alunos_guard_1_1) {
                alunos_guard_1 = alunos_guard_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (app_routing_module_1_1) {
                app_routing_module_1 = app_routing_module_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (pagina_nao_encontrada_component_1_1) {
                pagina_nao_encontrada_component_1 = pagina_nao_encontrada_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            home_component_1.HomeComponent,
                            login_component_1.LoginComponent,
                            pagina_nao_encontrada_component_1.PaginaNaoEncontradaComponent /*,
                            CursosComponent,
                            CursoDetalheComponent,
                            CursoNaoEncontradoComponent*/
                        ],
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            //CursosModule,
                            //AlunosModule,
                            app_routing_module_1.AppRoutingModule
                        ],
                        providers: [
                            auth_service_1.AuthService,
                            auth_guard_1.AuthGuard,
                            cursos_guard_1.CursosGuard,
                            alunos_guard_1.AlunosGuard
                        ],
                        //providers: [CursosService],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map