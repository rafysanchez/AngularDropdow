System.register(['./app.po'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_po_1;
    return {
        setters:[
            function (app_po_1_1) {
                app_po_1 = app_po_1_1;
            }],
        execute: function() {
            describe('pipes App', function () {
                var page;
                beforeEach(function () {
                    page = new app_po_1.AppPage();
                });
                it('should display welcome message', function () {
                    page.navigateTo();
                    expect(page.getParagraphText()).toEqual('Welcome to app!');
                });
            });
        }
    }
});
//# sourceMappingURL=app.e2e-spec.js.map