System.register(['./../shared/shared.module', './template-form.component', '@angular/core', '@angular/common', '@angular/common/http', '@angular/forms'], function(exports_1, context_1) {
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
    var shared_module_1, template_form_component_1, core_1, common_1, http_1, forms_1;
    var TemplateFormModule;
    return {
        setters:[
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (template_form_component_1_1) {
                template_form_component_1 = template_form_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            TemplateFormModule = (function () {
                function TemplateFormModule() {
                }
                TemplateFormModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            shared_module_1.SharedModule,
                            common_1.CommonModule,
                            http_1.HttpClientModule,
                            forms_1.FormsModule,
                            forms_1.ReactiveFormsModule,
                        ],
                        declarations: [
                            template_form_component_1.TemplateFormComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateFormModule);
                return TemplateFormModule;
            }());
            exports_1("TemplateFormModule", TemplateFormModule);
        }
    }
});
//# sourceMappingURL=template-form.module.js.map