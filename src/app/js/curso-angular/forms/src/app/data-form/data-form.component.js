System.register(['@angular/common/http', '@angular/core', '@angular/forms', './../shared/services/dropdown.service', '../shared/services/consulta-cep.service', '../shared/form-validations'], function(exports_1, context_1) {
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
    var http_1, core_1, forms_1, dropdown_service_1, consulta_cep_service_1, form_validations_1;
    var DataFormComponent;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (dropdown_service_1_1) {
                dropdown_service_1 = dropdown_service_1_1;
            },
            function (consulta_cep_service_1_1) {
                consulta_cep_service_1 = consulta_cep_service_1_1;
            },
            function (form_validations_1_1) {
                form_validations_1 = form_validations_1_1;
            }],
        execute: function() {
            DataFormComponent = (function () {
                function DataFormComponent(formBuilder, http, dropdownService, cepService) {
                    this.formBuilder = formBuilder;
                    this.http = http;
                    this.dropdownService = dropdownService;
                    this.cepService = cepService;
                    this.frameworks = ['Angular', 'React', 'Vue', 'Sencha'];
                }
                DataFormComponent.prototype.ngOnInit = function () {
                    this.estados = this.dropdownService.getEstadosBr();
                    this.cargos = this.dropdownService.getCargos();
                    this.tecnologias = this.dropdownService.getTecnologias();
                    this.newsletterOp = this.dropdownService.getNewsletter();
                    /*this.dropdownService.getEstadosBr().subscribe(dados => {
                      this.estados = dados;
                      console.log(dados);
                    });*/
                    /*this.formulario = new FormGroup({
                      nome: new FormControl(null),
                      email: new FormControl(null),
                
                      endereco: new FormGroup({
                        cep: new FormControl(null)
                      })
                    });*/
                    this.formulario = this.formBuilder.group({
                        nome: [null, forms_1.Validators.required],
                        email: [null, [forms_1.Validators.required, forms_1.Validators.email]],
                        endereco: this.formBuilder.group({
                            cep: [null, [forms_1.Validators.required, form_validations_1.FormValidations.cepValidator]],
                            numero: [null, forms_1.Validators.required],
                            complemento: [null],
                            rua: [null, forms_1.Validators.required],
                            bairro: [null, forms_1.Validators.required],
                            cidade: [null, forms_1.Validators.required],
                            estado: [null, forms_1.Validators.required]
                        }),
                        cargo: [null],
                        tecnologias: [null],
                        newsletter: ['s'],
                        termos: [null, forms_1.Validators.pattern('true')],
                        frameworks: this.buildFrameworks()
                    });
                    // tslint:disable-next-line:max-line-length
                    // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                    // [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
                };
                DataFormComponent.prototype.buildFrameworks = function () {
                    var values = this.frameworks.map(function (v) { return new forms_1.FormControl(false); });
                    return this.formBuilder.array(values, form_validations_1.FormValidations.requiredMinCheckbox(1));
                    /* this.formBuilder.array( [
                      new FormControl(false), // angular
                      new FormControl(false), // react
                      new FormControl(false), // vue
                      new FormControl(false) // sencha
                    ]); */
                };
                DataFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(this.formulario);
                    var valueSubmit = Object.assign({}, this.formulario.value);
                    valueSubmit = Object.assign(valueSubmit, {
                        frameworks: valueSubmit.frameworks
                            .map(function (v, i) { return v ? _this.frameworks[i] : null; })
                            .filter(function (v) { return v !== null; })
                    });
                    console.log(valueSubmit);
                    if (this.formulario.valid) {
                        this.http
                            .post('https://httpbin.org/post', JSON.stringify({}))
                            .subscribe(function (dados) {
                            console.log(dados);
                            // reseta o form
                            // this.formulario.reset();
                            // this.resetar();
                        }, function (error) { return alert('erro'); });
                    }
                    else {
                        console.log('formulario invalido');
                        this.verificaValidacoesForm(this.formulario);
                    }
                };
                DataFormComponent.prototype.verificaValidacoesForm = function (formGroup) {
                    var _this = this;
                    Object.keys(formGroup.controls).forEach(function (campo) {
                        console.log(campo);
                        var controle = formGroup.get(campo);
                        controle.markAsDirty();
                        if (controle instanceof forms_1.FormGroup) {
                            _this.verificaValidacoesForm(controle);
                        }
                    });
                };
                DataFormComponent.prototype.resetar = function () {
                    this.formulario.reset();
                };
                DataFormComponent.prototype.verificaValidTouched = function (campo) {
                    return (!this.formulario.get(campo).valid &&
                        (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
                };
                DataFormComponent.prototype.verificaRequired = function (campo) {
                    return (this.formulario.get(campo).hasError('required') &&
                        (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
                };
                DataFormComponent.prototype.verificaEmailInvalido = function () {
                    var campoEmail = this.formulario.get('email');
                    if (campoEmail.errors) {
                        return campoEmail.errors['email'] && campoEmail.touched;
                    }
                };
                DataFormComponent.prototype.aplicaCssErro = function (campo) {
                    return {
                        'has-error': this.verificaValidTouched(campo),
                        'has-feedback': this.verificaValidTouched(campo)
                    };
                };
                DataFormComponent.prototype.consultaCEP = function () {
                    var _this = this;
                    var cep = this.formulario.get('endereco.cep').value;
                    if (cep != null && cep !== '') {
                        this.cepService.consultaCEP(cep)
                            .subscribe(function (dados) { return _this.populaDadosForm(dados); });
                    }
                };
                DataFormComponent.prototype.populaDadosForm = function (dados) {
                    // this.formulario.setValue({});
                    this.formulario.patchValue({
                        endereco: {
                            rua: dados.logradouro,
                            // cep: dados.cep,
                            complemento: dados.complemento,
                            bairro: dados.bairro,
                            cidade: dados.localidade,
                            estado: dados.uf
                        }
                    });
                    this.formulario.get('nome').setValue('Loiane');
                    // console.log(form);
                };
                DataFormComponent.prototype.resetaDadosForm = function () {
                    this.formulario.patchValue({
                        endereco: {
                            rua: null,
                            complemento: null,
                            bairro: null,
                            cidade: null,
                            estado: null
                        }
                    });
                };
                DataFormComponent.prototype.setarCargo = function () {
                    var cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
                    this.formulario.get('cargo').setValue(cargo);
                };
                DataFormComponent.prototype.compararCargos = function (obj1, obj2) {
                    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
                };
                DataFormComponent.prototype.setarTecnologias = function () {
                    this.formulario.get('tecnologias').setValue(['java', 'javascript', 'php']);
                };
                DataFormComponent = __decorate([
                    core_1.Component({
                        selector: 'app-data-form',
                        templateUrl: './data-form.component.html',
                        styleUrls: ['./data-form.component.css']
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, (typeof (_a = typeof http_1.HttpClient !== 'undefined' && http_1.HttpClient) === 'function' && _a) || Object, dropdown_service_1.DropdownService, consulta_cep_service_1.ConsultaCepService])
                ], DataFormComponent);
                return DataFormComponent;
                var _a;
            }());
            exports_1("DataFormComponent", DataFormComponent);
        }
    }
});
//# sourceMappingURL=data-form.component.js.map