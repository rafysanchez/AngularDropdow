System.register(['@angular/core', '../cursos/cursos.service'], function(exports_1, context_1) {
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
    var core_1, cursos_service_1;
    var CriarCursoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cursos_service_1_1) {
                cursos_service_1 = cursos_service_1_1;
            }],
        execute: function() {
            CriarCursoComponent = (function () {
                function CriarCursoComponent(cursosService) {
                    this.cursosService = cursosService;
                    this.cursos = [];
                }
                CriarCursoComponent.prototype.ngOnInit = function () {
                    this.cursos = this.cursosService.getCursos();
                };
                CriarCursoComponent.prototype.onAddCurso = function (curso) {
                    this.cursosService.addCurso(curso);
                };
                CriarCursoComponent = __decorate([
                    core_1.Component({
                        selector: 'app-criar-curso',
                        templateUrl: './criar-curso.component.html',
                        styleUrls: ['./criar-curso.component.css'],
                        providers: [cursos_service_1.CursosService]
                    }), 
                    __metadata('design:paramtypes', [cursos_service_1.CursosService])
                ], CriarCursoComponent);
                return CriarCursoComponent;
            }());
            exports_1("CriarCursoComponent", CriarCursoComponent);
        }
    }
});
//# sourceMappingURL=criar-curso.component.js.map