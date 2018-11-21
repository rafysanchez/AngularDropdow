System.register(['@angular/core', '../services/user-service', '../domain/user'], function(exports_1, context_1) {
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
    var core_1, user_service_1, user_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(userService) {
                    this.userService = userService;
                    this.isValidFormSubmitted = false;
                    this.user = new user_1.User();
                }
                UserComponent.prototype.ngOnInit = function () {
                    this.allProfiles = this.userService.getPofiles();
                    this.allTechnologies = this.userService.getTechnologies();
                };
                UserComponent.prototype.onFormSubmit = function (form) {
                    this.isValidFormSubmitted = false;
                    if (form.valid) {
                        this.isValidFormSubmitted = true;
                    }
                    else {
                        return;
                    }
                    var userName = form.controls['name'].value;
                    var userProfile = form.controls['profile'].value;
                    var userTechnologies = form.controls['selectedTechs'].value;
                    var newUser = new user_1.User();
                    newUser.userName = userName;
                    newUser.profile = userProfile;
                    newUser.technologies = userTechnologies;
                    this.userService.createUser(newUser);
                    this.resetForm(form);
                };
                UserComponent.prototype.resetForm = function (form) {
                    form.resetForm();
                    this.user.profile = null;
                    this.user.userName = '';
                };
                UserComponent.prototype.setDefaultValues = function () {
                    this.user.userName = "Narendra Modi";
                    this.user.profile = this.allProfiles[2];
                    this.user.technologies = [
                        this.allTechnologies[1],
                        this.allTechnologies[3]
                    ];
                };
                UserComponent.prototype.onProfileChange = function () {
                    console.log('Profile Changed: ' + this.user.profile.prName);
                };
                UserComponent.prototype.compareTech = function (t1, t2) {
                    console.log(t1.techId + '-' + t2.techId);
                    return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'app-template',
                        templateUrl: './user.component.html',
                        styleUrls: ['./user.component.css']
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map