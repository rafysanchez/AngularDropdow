System.register(['@angular/core', '../shared/log.service'], function(exports_1, context_1) {
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
    var core_1, log_service_1;
    var CursosService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            }],
        execute: function() {
            CursosService = (function () {
                function CursosService(logService) {
                    this.logService = logService;
                    this.emitirCursoCriado = new core_1.EventEmitter();
                    this.cursos = ['Angular 2', 'Java', 'Phonegap'];
                    console.log('CursosService');
                }
                CursosService.prototype.getCursos = function () {
                    this.logService.consoleLog('Obtendo lista de cursos');
                    return this.cursos;
                };
                CursosService.prototype.addCurso = function (curso) {
                    this.logService.consoleLog("Criando um novo curso " + curso);
                    this.cursos.push(curso);
                    this.emitirCursoCriado.emit(curso);
                    CursosService.criouNovoCurso.emit(curso);
                };
                CursosService.criouNovoCurso = new core_1.EventEmitter();
                CursosService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [log_service_1.LogService])
                ], CursosService);
                return CursosService;
            }());
            exports_1("CursosService", CursosService);
        }
    }
});
//# sourceMappingURL=cursos.service.js.map