"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReverseStr = /** @class */ (function () {
    function ReverseStr() {
    }
    ReverseStr.prototype.transform = function (value) {
        var newStr = "";
        for (var i = value.length - 1; i >= 0; i--) {
            newStr += value.charAt(i);
        }
        return newStr;
    };
    ReverseStr = __decorate([
        core_1.Pipe({ name: 'reverseStr' })
    ], ReverseStr);
    return ReverseStr;
}());
exports.ReverseStr = ReverseStr;
var UselessPipe = /** @class */ (function () {
    function UselessPipe() {
    }
    UselessPipe.prototype.transform = function (value, before, after) {
        var newStr = before + " " + value.toUpperCase() + " " + after;
        return newStr;
    };
    UselessPipe = __decorate([
        core_1.Pipe({ name: 'uselessPipe' })
    ], UselessPipe);
    return UselessPipe;
}());
exports.UselessPipe = UselessPipe;
//# sourceMappingURL=reverse-str.pipe.js.map