System.register(['./pt-br-locale', '@angular/forms', '@angular/platform-browser', '@angular/core', './app.component', './exemplos-pipes/exemplos-pipes.component', './camel-case.pipe', './settings.service', './filtro-array.pipe', './filtro-array-impuro.pipe'], function(exports_1, context_1) {
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
    var pt_br_locale_1, forms_1, platform_browser_1, core_1, app_component_1, exemplos_pipes_component_1, camel_case_pipe_1, settings_service_1, filtro_array_pipe_1, filtro_array_impuro_pipe_1;
    var AppModule;
    return {
        setters:[
            function (pt_br_locale_1_1) {
                pt_br_locale_1 = pt_br_locale_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (exemplos_pipes_component_1_1) {
                exemplos_pipes_component_1 = exemplos_pipes_component_1_1;
            },
            function (camel_case_pipe_1_1) {
                camel_case_pipe_1 = camel_case_pipe_1_1;
            },
            function (settings_service_1_1) {
                settings_service_1 = settings_service_1_1;
            },
            function (filtro_array_pipe_1_1) {
                filtro_array_pipe_1 = filtro_array_pipe_1_1;
            },
            function (filtro_array_impuro_pipe_1_1) {
                filtro_array_impuro_pipe_1 = filtro_array_impuro_pipe_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            exemplos_pipes_component_1.ExemplosPipesComponent,
                            camel_case_pipe_1.CamelCasePipe,
                            filtro_array_pipe_1.FiltroArrayPipe,
                            filtro_array_impuro_pipe_1.FiltroArrayImpuroPipe
                        ],
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule
                        ],
                        providers: [
                            /*{
                              provide: LOCALE_ID,
                              useValue: 'pt-BR'
                            }*/
                            settings_service_1.SettingsService,
                            {
                                provide: core_1.LOCALE_ID,
                                deps: [settings_service_1.SettingsService],
                                useFactory: pt_br_locale_1.ptbrLocale
                            }
                        ],
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