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
var core_1 = require("@angular/core");
var TutorialCompoment = /** @class */ (function () {
    function TutorialCompoment() {
        this.onVote = new core_1.EventEmitter();
        this.voted = false;
    }
    TutorialCompoment.prototype.vote = function (trangthai) {
        this.voted = true;
        this.onVote.emit(trangthai);
    };
    TutorialCompoment.prototype.setName = function (name) {
        this.name = name;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TutorialCompoment.prototype, "name", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TutorialCompoment.prototype, "onVote", void 0);
    TutorialCompoment = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "\n    <p>Gi\u00E1 tr\u1ECB c\u1EE7a cha : {{name}}</p>\n    <br/>\n    <button [disabled]=\"voted\" (click)=\"vote(true)\">\u0110\u1ED3ng \u00FD</button>\n    <button [disabled]=\"voted\" (click)=\"vote(false)\">Kh\u00F4ng \u0111\u1ED3ng \u00FD</button>\n    K\u1EBFt qu\u1EA3 : {{voted}}\n    ",
        })
    ], TutorialCompoment);
    return TutorialCompoment;
}());
exports.TutorialCompoment = TutorialCompoment;
//# sourceMappingURL=tutorial.compoment.js.map