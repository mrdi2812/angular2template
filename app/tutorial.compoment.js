"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TutorialCompoment = /** @class */ (function () {
    function TutorialCompoment() {
        this.showLine = false;
        this.bangmau = ["Trang chủ", "Giới thiệu", "Sản phẩm"];
    }
    TutorialCompoment.prototype.Load = function (value) {
        this.mau = value;
    };
    TutorialCompoment = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "<h2>Trang ch\u1EE7 c\u00F4ng ngh\u1EC7</h2>\n    <h3 *ngIf=\"showLine\">TUAN</h3>\n   \n    <div [ngSwitch]=\"mau\">\n        <p *ngSwitchCase=\"'xanh'\">Xanh</p>\n        <p *ngSwitchCase=\"'\u0111\u1ECF'\">\u0110\u1ECF</p>\n        <p *ngSwitchCase=\"'t\u00EDm'\">T\u00EDm</p>\n        <p *ngSwitchCase=\"'v\u00E0ng'\">V\u00E0ng</p>\n        <p *ngSwitchDefault>M\u1EB7c \u0111\u1ECBnh</p>\n    </div>\n    <button (click)=\"Load(name.value)\">OK</button>\n    <input type=\"text\" #name/>\n    <ul>\n    <li *ngFor=\"let item of bangmau\">{{item}}</li>\n    </ul>\n    ",
        })
    ], TutorialCompoment);
    return TutorialCompoment;
}());
exports.TutorialCompoment = TutorialCompoment;
//# sourceMappingURL=tutorial.compoment.js.map