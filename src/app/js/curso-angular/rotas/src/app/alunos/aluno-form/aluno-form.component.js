System.register(['./../alunos.service', '@angular/router', '@angular/core'], function(exports_1, context_1) {
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
    var alunos_service_1, router_1, core_1;
    var AlunoFormComponent;
    return {
        setters:[
            function (alunos_service_1_1) {
                alunos_service_1 = alunos_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AlunoFormComponent = (function () {
                function AlunoFormComponent(route, alunosService) {
                    this.route = route;
                    this.alunosService = alunosService;
                    this.aluno = {};
                    this.formMudou = false;
                }
                AlunoFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.inscricao = this.route.params.subscribe(function (params) {
                        var id = params['id'];
                        _this.aluno = _this.alunosService.getAluno(id);
                        if (_this.aluno === null) {
                            _this.aluno = {};
                        }
                    });
                };
                AlunoFormComponent.prototype.ngOnDestroy = function () {
                    this.inscricao.unsubscribe();
                };
                AlunoFormComponent.prototype.onInput = function () {
                    this.formMudou = true;
                    console.log('mudou');
                };
                AlunoFormComponent.prototype.podeMudarRota = function () {
                    if (this.formMudou) {
                        confirm('Tem certeza que deseja sair dessa página?');
                    }
                    return true;
                };
                AlunoFormComponent.prototype.podeDesativar = function () {
                    return this.podeMudarRota();
                };
                AlunoFormComponent = __decorate([
                    core_1.Component({
                        selector: 'app-aluno-form',
                        templateUrl: './aluno-form.component.html',
                        styleUrls: ['./aluno-form.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, alunos_service_1.AlunosService])
                ], AlunoFormComponent);
                return AlunoFormComponent;
            }());
            exports_1("AlunoFormComponent", AlunoFormComponent);
        }
    }
});
//# sourceMappingURL=aluno-form.component.js.map