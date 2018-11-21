System.register(['@angular/core', './cursos.service'], function(exports_1, context_1) {
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
    var CursosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cursos_service_1_1) {
                cursos_service_1 = cursos_service_1_1;
            }],
        execute: function() {
            CursosComponent = (function () {
                //cursosService: CursosService;
                function CursosComponent(cursosService) {
                    this.cursosService = cursosService;
                    this.cursos = [];
                    //this.cursosService = new CursosService();
                    //this.cursosService = _cursosService;
                }
                CursosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.cursos = this.cursosService.getCursos();
                    cursos_service_1.CursosService.criouNovoCurso.subscribe(function (curso) { return _this.cursos.push(curso); });
                };
                CursosComponent = __decorate([
                    core_1.Component({
                        selector: 'app-cursos',
                        templateUrl: './cursos.component.html',
                        styleUrls: ['./cursos.component.css'],
                        providers: [cursos_service_1.CursosService]
                    }), 
                    __metadata('design:paramtypes', [cursos_service_1.CursosService])
                ], CursosComponent);
                return CursosComponent;
            }());
            exports_1("CursosComponent", CursosComponent);
        }
    }
});
//# sourceMappingURL=cursos.component.js.map