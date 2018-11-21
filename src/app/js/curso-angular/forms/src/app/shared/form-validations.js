System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FormValidations;
    return {
        setters:[],
        execute: function() {
            FormValidations = (function () {
                function FormValidations() {
                }
                FormValidations.requiredMinCheckbox = function (min) {
                    if (min === void 0) { min = 1; }
                    var validator = function (formArray) {
                        /* const values = formArray.controls;
                        let totalChecked = 0;
                        for (let i = 0; i < values.length; i++) {
                          if (values[i].value) {
                            totalChecked += 1;
                          }
                        } */
                        var totalChecked = formArray.controls
                            .map(function (v) { return v.value; })
                            .reduce(function (total, current) { return current ? total + current : total; }, 0);
                        return totalChecked >= min ? null : { required: true };
                    };
                    return validator;
                };
                FormValidations.cepValidator = function (control) {
                    var cep = control.value;
                    if (cep && cep !== '') {
                        var validacep = /^[0-9]{8}$/;
                        return validacep.test(cep) ? null : { cepInvalido: true };
                    }
                    return null;
                };
                return FormValidations;
            }());
            exports_1("FormValidations", FormValidations);
        }
    }
});
//# sourceMappingURL=form-validations.js.map