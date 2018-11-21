System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var DataBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataBindingComponent = (function () {
                function DataBindingComponent() {
                    this.url = 'http://loiane.com';
                    this.cursoAngular = true;
                    this.urlImagem = 'http://lorempixel.com/400/200/nature/';
                    this.valorAtual = '';
                    this.valorSalvo = '';
                    this.isMouseOver = false;
                    this.nomeDoCurso = 'Angular';
                    this.valorInicial = 15;
                }
                DataBindingComponent.prototype.getValor = function () {
                    return 1;
                };
                DataBindingComponent.prototype.getCurtirCurso = function () {
                    return true;
                };
                DataBindingComponent.prototype.botaoClicado = function () {
                    alert('Botão clicado!');
                };
                DataBindingComponent.prototype.onKeyUp = function (evento) {
                    this.valorAtual = evento.target.value;
                };
                DataBindingComponent.prototype.salvarValor = function (valor) {
                    this.valorSalvo = valor;
                };
                DataBindingComponent.prototype.onMouseOverOut = function () {
                    this.isMouseOver = !this.isMouseOver;
                };
                DataBindingComponent.prototype.onMudouValor = function (evento) {
                    console.log(evento.novoValor);
                };
                DataBindingComponent.prototype.ngOnInit = function () {
                };
                DataBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'app-data-binding',
                        templateUrl: './data-binding.component.html',
                        //styleUrls: ['./data-binding.component.css']
                        styles: [
                            "\n      .highlight {\n          background-color: yellow;\n          font-weight: bold;\n      }\n    "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DataBindingComponent);
                return DataBindingComponent;
            }());
            exports_1("DataBindingComponent", DataBindingComponent);
        }
    }
});
//# sourceMappingURL=data-binding.component.js.map