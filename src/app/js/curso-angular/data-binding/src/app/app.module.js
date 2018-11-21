System.register(['./meu-form/meu-form.module', '@angular/platform-browser', '@angular/core', './app.component', './data-binding/data-binding.component', './input-property/input-property.component', './output-property/output-property.component', './ciclo/ciclo.component'], function(exports_1, context_1) {
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
    var meu_form_module_1, platform_browser_1, core_1, app_component_1, data_binding_component_1, input_property_component_1, output_property_component_1, ciclo_component_1;
    var AppModule;
    return {
        setters:[
            function (meu_form_module_1_1) {
                meu_form_module_1 = meu_form_module_1_1;
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
            function (data_binding_component_1_1) {
                data_binding_component_1 = data_binding_component_1_1;
            },
            function (input_property_component_1_1) {
                input_property_component_1 = input_property_component_1_1;
            },
            function (output_property_component_1_1) {
                output_property_component_1 = output_property_component_1_1;
            },
            function (ciclo_component_1_1) {
                ciclo_component_1 = ciclo_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            data_binding_component_1.DataBindingComponent,
                            input_property_component_1.InputPropertyComponent,
                            output_property_component_1.OutputPropertyComponent,
                            ciclo_component_1.CicloComponent
                        ],
                        imports: [
                            platform_browser_1.BrowserModule,
                            meu_form_module_1.MeuFormModule
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