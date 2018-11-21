System.register(['@angular/core', '@angular/common/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var DropdownService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DropdownService = (function () {
                function DropdownService(http) {
                    this.http = http;
                }
                DropdownService.prototype.getEstadosBr = function () {
                    return this.http.get('assets/dados/estadosbr.json');
                };
                DropdownService.prototype.getCargos = function () {
                    return [
                        { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
                        { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
                        { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
                    ];
                };
                DropdownService.prototype.getTecnologias = function () {
                    return [
                        { nome: 'java', desc: 'Java' },
                        { nome: 'javascript', desc: 'JavaScript' },
                        { nome: 'php', desc: 'PHP' },
                        { nome: 'ruby', desc: 'Ruby' }
                    ];
                };
                DropdownService.prototype.getNewsletter = function () {
                    return [
                        { valor: 's', desc: 'Sim' },
                        { valor: 'n', desc: 'Não' }
                    ];
                };
                DropdownService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.HttpClient !== 'undefined' && http_1.HttpClient) === 'function' && _a) || Object])
                ], DropdownService);
                return DropdownService;
                var _a;
            }());
            exports_1("DropdownService", DropdownService);
        }
    }
});
//# sourceMappingURL=dropdown.service.js.map