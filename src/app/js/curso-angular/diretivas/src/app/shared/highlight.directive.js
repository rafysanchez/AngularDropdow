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
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective() {
                    this.defaultColor = 'white';
                    this.highlightColor = 'yellow';
                }
                HighlightDirective.prototype.onMouseOver = function () {
                    this.backgroundColor = this.highlightColor;
                };
                HighlightDirective.prototype.onMouseLeave = function () {
                    this.backgroundColor = this.defaultColor;
                };
                HighlightDirective.prototype.ngOnInit = function () {
                    this.backgroundColor = this.defaultColor;
                };
                __decorate([
                    core_1.HostListener('mouseenter'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], HighlightDirective.prototype, "onMouseOver", null);
                __decorate([
                    core_1.HostListener('mouseleave'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], HighlightDirective.prototype, "onMouseLeave", null);
                __decorate([
                    core_1.HostBinding('style.backgroundColor'), 
                    __metadata('design:type', String)
                ], HighlightDirective.prototype, "backgroundColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], HighlightDirective.prototype, "defaultColor", void 0);
                __decorate([
                    core_1.Input('highlight'), 
                    __metadata('design:type', String)
                ], HighlightDirective.prototype, "highlightColor", void 0);
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[highlight]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});
//# sourceMappingURL=highlight.directive.js.map