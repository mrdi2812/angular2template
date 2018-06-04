"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_service_1 = require("../service/login.service");
var core_1 = require("@angular/core");
var CheckLoginGuards = /** @class */ (function () {
    function CheckLoginGuards(loginService) {
        this.loginService = loginService;
    }
    CheckLoginGuards.prototype.canActivate = function () {
        return this.loginService.IsLogined();
    };
    CheckLoginGuards = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], CheckLoginGuards);
    return CheckLoginGuards;
}());
exports.CheckLoginGuards = CheckLoginGuards;
//# sourceMappingURL=check-login.guards.js.map