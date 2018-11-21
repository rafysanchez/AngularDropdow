System.register(['@angular/forms', '@angular/core', '@angular/common', './meu-form.component'], function(exports_1, context_1) {
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
    var forms_1, core_1, common_1, meu_form_component_1;
    var MeuFormModule;
    return {
        setters:[
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (meu_form_component_1_1) {
                meu_form_component_1 = meu_form_component_1_1;
            }],
        execute: function() {
            MeuFormModule = (function () {
                function MeuFormModule() {
                }
                MeuFormModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule
                        ],
                        declarations: [
                            meu_form_component_1.MeuFormComponent
                        ],
                        exports: [meu_form_component_1.MeuFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MeuFormModule);
                return MeuFormModule;
            }());
            exports_1("MeuFormModule", MeuFormModule);
        }
    }
});
//# sourceMappingURL=meu-form.module.js.map