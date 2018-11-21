System.register(['@angular/common/http', '@angular/core', '../shared/services/consulta-cep.service'], function(exports_1, context_1) {
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
    var http_1, core_1, consulta_cep_service_1;
    var TemplateFormComponent;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (consulta_cep_service_1_1) {
                consulta_cep_service_1 = consulta_cep_service_1_1;
            }],
        execute: function() {
            TemplateFormComponent = (function () {
                function TemplateFormComponent(http, cepService) {
                    this.http = http;
                    this.cepService = cepService;
                    this.usuario = {
                        nome: null,
                        email: null
                    };
                }
                TemplateFormComponent.prototype.onSubmit = function (formulario) {
                    console.log(formulario);
                    // form.value
                    // console.log(this.usuario);
                    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
                        .subscribe(function (dados) {
                        console.log(dados);
                        formulario.form.reset();
                    });
                };
                TemplateFormComponent.prototype.ngOnInit = function () {
                };
                TemplateFormComponent.prototype.verificaValidTouched = function (campo) {
                    return !campo.valid && campo.touched;
                };
                TemplateFormComponent.prototype.aplicaCssErro = function (campo) {
                    return {
                        'has-error': this.verificaValidTouched(campo),
                        'has-feedback': this.verificaValidTouched(campo)
                    };
                };
                TemplateFormComponent.prototype.consultaCEP = function (cep, form) {
                    var _this = this;
                    // Nova variável "cep" somente com dígitos.
                    cep = cep.replace(/\D/g, '');
                    if (cep != null && cep !== '') {
                        this.cepService.consultaCEP(cep)
                            .subscribe(function (dados) { return _this.populaDadosForm(dados, form); });
                    }
                };
                TemplateFormComponent.prototype.populaDadosForm = function (dados, formulario) {
                    /*formulario.setValue({
                      nome: formulario.value.nome,
                      email: formulario.value.email,
                      endereco: {
                        rua: dados.logradouro,
                        cep: dados.cep,
                        numero: '',
                        complemento: dados.complemento,
                        bairro: dados.bairro,
                        cidade: dados.localidade,
                        estado: dados.uf
                      }
                    });*/
                    formulario.form.patchValue({
                        endereco: {
                            rua: dados.logradouro,
                            // cep: dados.cep,
                            complemento: dados.complemento,
                            bairro: dados.bairro,
                            cidade: dados.localidade,
                            estado: dados.uf
                        }
                    });
                    // console.log(form);
                };
                TemplateFormComponent.prototype.resetaDadosForm = function (formulario) {
                    formulario.form.patchValue({
                        endereco: {
                            rua: null,
                            complemento: null,
                            bairro: null,
                            cidade: null,
                            estado: null
                        }
                    });
                };
                TemplateFormComponent = __decorate([
                    core_1.Component({
                        selector: 'app-template-form',
                        templateUrl: './template-form.component.html',
                        styleUrls: ['./template-form.component.css']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.HttpClient !== 'undefined' && http_1.HttpClient) === 'function' && _a) || Object, consulta_cep_service_1.ConsultaCepService])
                ], TemplateFormComponent);
                return TemplateFormComponent;
                var _a;
            }());
            exports_1("TemplateFormComponent", TemplateFormComponent);
        }
    }
});
//# sourceMappingURL=template-form.component.js.map