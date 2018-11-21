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
    var HighlightMouseDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HighlightMouseDirective = (function () {
                function HighlightMouseDirective() {
                }
                HighlightMouseDirective.prototype.onMouseOver = function () {
                    /*this._renderer.setElementStyle(
                      this._elementRef.nativeElement,
                      'background-color', 'yellow'
                      );*/
                    this.backgroundColor = 'yellow';
                };
                HighlightMouseDirective.prototype.onMouseLeave = function () {
                    /*this._renderer.setElementStyle(
                      this._elementRef.nativeElement,
                      'background-color', 'white'
                      );*/
                    this.backgroundColor = 'white';
                };
                Object.defineProperty(HighlightMouseDirective.prototype, "setColor", {
                    //@HostBinding('style.backgroundColor') backgroundColor: string;
                    get: function () {
                        //codigo extra;
                        return this.backgroundColor;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.HostListener('mouseenter'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], HighlightMouseDirective.prototype, "onMouseOver", null);
                __decorate([
                    core_1.HostListener('mouseleave'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], HighlightMouseDirective.prototype, "onMouseLeave", null);
                __decorate([
                    core_1.HostBinding('style.backgroundColor'), 
                    __metadata('design:type', Object)
                ], HighlightMouseDirective.prototype, "setColor", null);
                HighlightMouseDirective = __decorate([
                    core_1.Directive({
                        selector: '[highlightMouse]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HighlightMouseDirective);
                return HighlightMouseDirective;
            }());
            exports_1("HighlightMouseDirective", HighlightMouseDirective);
        }
    }
});
//# sourceMappingURL=highlight-mouse.directive.js.map