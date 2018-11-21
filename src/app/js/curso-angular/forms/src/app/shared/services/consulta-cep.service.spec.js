System.register(['@angular/core/testing', './consulta-cep.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, consulta_cep_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (consulta_cep_service_1_1) {
                consulta_cep_service_1 = consulta_cep_service_1_1;
            }],
        execute: function() {
            describe('ConsultaCepService', function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        providers: [consulta_cep_service_1.ConsultaCepService]
                    });
                });
                it('should be created', testing_1.inject([consulta_cep_service_1.ConsultaCepService], function (service) {
                    expect(service).toBeTruthy();
                }));
            });
        }
    }
});
//# sourceMappingURL=consulta-cep.service.spec.js.map