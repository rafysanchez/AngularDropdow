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
    var CicloComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CicloComponent = (function () {
                function CicloComponent() {
                    this.valorInicial = 10;
                    this.log('constructor');
                }
                CicloComponent.prototype.ngOnChanges = function () {
                    this.log('ngOnChanges');
                };
                CicloComponent.prototype.ngOnInit = function () {
                    this.log('ngOnInit');
                };
                CicloComponent.prototype.ngDoCheck = function () {
                    this.log('ngDoCheck');
                };
                CicloComponent.prototype.ngAfterContentInit = function () {
                    this.log('ngAfterContentInit');
                };
                CicloComponent.prototype.ngAfterContentChecked = function () {
                    this.log('ngAfterContentChecked');
                };
                CicloComponent.prototype.ngAfterViewInit = function () {
                    this.log('ngAfterViewInit');
                };
                CicloComponent.prototype.ngAfterViewChecked = function () {
                    this.log('ngAfterViewChecked');
                };
                CicloComponent.prototype.ngOnDestroy = function () {
                    this.log('ngOnDestroy');
                };
                CicloComponent.prototype.log = function (hook) {
                    console.log(hook);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], CicloComponent.prototype, "valorInicial", void 0);
                CicloComponent = __decorate([
                    core_1.Component({
                        selector: 'app-ciclo',
                        templateUrl: './ciclo.component.html',
                        styleUrls: ['./ciclo.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CicloComponent);
                return CicloComponent;
            }());
            exports_1("CicloComponent", CicloComponent);
        }
    }
});
//# sourceMappingURL=ciclo.component.js.map