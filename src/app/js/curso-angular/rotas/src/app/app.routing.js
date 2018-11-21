System.register(['./cursos/curso-nao-encontrado/curso-nao-encontrado.component', './cursos/curso-detalhe/curso-detalhe.component', '@angular/router', './home/home.component', './cursos/cursos.component', './login/login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var curso_nao_encontrado_component_1, curso_detalhe_component_1, router_1, home_component_1, cursos_component_1, login_component_1;
    var APP_ROUTES, routing;
    return {
        setters:[
            function (curso_nao_encontrado_component_1_1) {
                curso_nao_encontrado_component_1 = curso_nao_encontrado_component_1_1;
            },
            function (curso_detalhe_component_1_1) {
                curso_detalhe_component_1 = curso_detalhe_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (cursos_component_1_1) {
                cursos_component_1 = cursos_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            APP_ROUTES = [
                { path: 'cursos', component: cursos_component_1.CursosComponent },
                { path: 'curso/:id', component: curso_detalhe_component_1.CursoDetalheComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'naoEncontrado', component: curso_nao_encontrado_component_1.CursoNaoEncontradoComponent },
                { path: '', component: home_component_1.HomeComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(APP_ROUTES));
        }
    }
});
//# sourceMappingURL=app.routing.js.map