System.register(['@angular/core', '@angular/common/http', 'rxjs'], function(exports_1, context_1) {
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
    var core_1, http_1, rxjs_1;
    var ConsultaCepService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }],
        execute: function() {
            ConsultaCepService = (function () {
                function ConsultaCepService(http) {
                    this.http = http;
                }
                ConsultaCepService.prototype.consultaCEP = function (cep) {
                    // Nova variável "cep" somente com dígitos.
                    cep = cep.replace(/\D/g, '');
                    // Verifica se campo cep possui valor informado.
                    if (cep !== '') {
                        // Expressão regular para validar o CEP.
                        var validacep = /^[0-9]{8}$/;
                        // Valida o formato do CEP.
                        if (validacep.test(cep)) {
                            return this.http.get("//viacep.com.br/ws/" + cep + "/json");
                        }
                    }
                    return rxjs_1.of({});
                };
                ConsultaCepService = __decorate([
                    core_1.Injectable({
                        providedIn: 'root'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.HttpClient !== 'undefined' && http_1.HttpClient) === 'function' && _a) || Object])
                ], ConsultaCepService);
                return ConsultaCepService;
                var _a;
            }());
            exports_1("ConsultaCepService", ConsultaCepService);
        }
    }
});
//# sourceMappingURL=consulta-cep.service.js.map