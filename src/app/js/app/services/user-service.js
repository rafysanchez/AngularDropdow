System.register(['@angular/core', '../domain/profile', '../domain/technology'], function(exports_1, context_1) {
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
    var core_1, profile_1, technology_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            },
            function (technology_1_1) {
                technology_1 = technology_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService() {
                }
                UserService.prototype.getPofiles = function () {
                    var profiles = [
                        new profile_1.Profile('dev', 'Developer'),
                        new profile_1.Profile('man', 'Manager'),
                        new profile_1.Profile('dir', 'Director')
                    ];
                    return profiles;
                };
                UserService.prototype.getTechnologies = function () {
                    var technologies = [
                        new technology_1.Technology(100, 'Java'),
                        new technology_1.Technology(101, 'Angular'),
                        new technology_1.Technology(102, 'Hibernate'),
                        new technology_1.Technology(103, 'Spring')
                    ];
                    return technologies;
                };
                UserService.prototype.createUser = function (user) {
                    //Log user data in console
                    console.log("User Name: " + user.userName);
                    console.log("Profile Id: " + user.profile.prId);
                    console.log("Profile Name: " + user.profile.prName);
                    for (var i = 0; i < user.technologies.length; i++) {
                        console.log("Technology Id: " + user.technologies[i].techId);
                        console.log("Technology Name: " + user.technologies[i].techName);
                    }
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user-service.js.map