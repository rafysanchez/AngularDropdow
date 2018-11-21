System.register(['@angular/forms', '@angular/platform-browser', '@angular/core', './app.component', './diretiva-ngif/diretiva-ngif.component', './diretiva-ngfor/diretiva-ngfor.component', './diretiva-ngswitch/diretiva-ngswitch.component', './diretiva-ngclass/diretiva-ngclass.component', './diretiva-ngstyle/diretiva-ngstyle.component', './operador-elvis/operador-elvis.component', './exemplo-ng-content/exemplo-ng-content.component', './shared/fundo-amarelo.directive', './diretivas-customizadas/diretivas-customizadas.component', './shared/highlight-mouse.directive', './shared/highlight.directive', './shared/ng-else.directive'], function(exports_1, context_1) {
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
    var forms_1, platform_browser_1, core_1, app_component_1, diretiva_ngif_component_1, diretiva_ngfor_component_1, diretiva_ngswitch_component_1, diretiva_ngclass_component_1, diretiva_ngstyle_component_1, operador_elvis_component_1, exemplo_ng_content_component_1, fundo_amarelo_directive_1, diretivas_customizadas_component_1, highlight_mouse_directive_1, highlight_directive_1, ng_else_directive_1;
    var AppModule;
    return {
        setters:[
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
            function (diretiva_ngif_component_1_1) {
                diretiva_ngif_component_1 = diretiva_ngif_component_1_1;
            },
            function (diretiva_ngfor_component_1_1) {
                diretiva_ngfor_component_1 = diretiva_ngfor_component_1_1;
            },
            function (diretiva_ngswitch_component_1_1) {
                diretiva_ngswitch_component_1 = diretiva_ngswitch_component_1_1;
            },
            function (diretiva_ngclass_component_1_1) {
                diretiva_ngclass_component_1 = diretiva_ngclass_component_1_1;
            },
            function (diretiva_ngstyle_component_1_1) {
                diretiva_ngstyle_component_1 = diretiva_ngstyle_component_1_1;
            },
            function (operador_elvis_component_1_1) {
                operador_elvis_component_1 = operador_elvis_component_1_1;
            },
            function (exemplo_ng_content_component_1_1) {
                exemplo_ng_content_component_1 = exemplo_ng_content_component_1_1;
            },
            function (fundo_amarelo_directive_1_1) {
                fundo_amarelo_directive_1 = fundo_amarelo_directive_1_1;
            },
            function (diretivas_customizadas_component_1_1) {
                diretivas_customizadas_component_1 = diretivas_customizadas_component_1_1;
            },
            function (highlight_mouse_directive_1_1) {
                highlight_mouse_directive_1 = highlight_mouse_directive_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (ng_else_directive_1_1) {
                ng_else_directive_1 = ng_else_directive_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            diretiva_ngif_component_1.DiretivaNgifComponent,
                            diretiva_ngfor_component_1.DiretivaNgforComponent,
                            diretiva_ngswitch_component_1.DiretivaNgswitchComponent,
                            diretiva_ngclass_component_1.DiretivaNgclassComponent,
                            diretiva_ngstyle_component_1.DiretivaNgstyleComponent,
                            operador_elvis_component_1.OperadorElvisComponent,
                            exemplo_ng_content_component_1.ExemploNgContentComponent,
                            fundo_amarelo_directive_1.FundoAmareloDirective,
                            diretivas_customizadas_component_1.DiretivasCustomizadasComponent,
                            highlight_mouse_directive_1.HighlightMouseDirective,
                            highlight_directive_1.HighlightDirective,
                            ng_else_directive_1.NgElseDirective
                        ],
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule
                        ],
                        providers: [],
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