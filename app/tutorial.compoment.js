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
        this.colors = ["Trang chủ", "Giới thiệu", "Sản phẩm"];
    }
    TutorialCompoment = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "<h2>Trang ch\u1EE7 c\u00F4ng ngh\u1EC7</h2>\n    <h3 *ngIf=\"showLine\">TUAN</h3>\n    <div [ngSwitch]=\"color\">\n    <p *ngSwitchCase=\"'red'\">\u0110\u00E2y l\u00E0 m\u00E0u \u0111\u1ECF</p>\n    <p *ngSwitchCase=\"'blue'\">\u0110\u00E2y l\u00E0 m\u00E0u xanh</p>\n    <p *ngSwitchCase=\"'orange'\">\u0110\u00E2y l\u00E0 m\u00E0u cam</p>\n    <p *ngSwitchDefault>\u0110\u00E2y l\u00E0 m\u00E0u m\u1EB7c \u0111\u1ECBnh</p>\n    </div>\n    <input type=\"text\" [(ngModel)]=\"color\"/>\n    <ul>\n        <li *ngFor=\"let item of colors\">{{item}}</li>\n    </ul>\n    ",
        })
    ], TutorialCompoment);
    return TutorialCompoment;
}());
exports.TutorialCompoment = TutorialCompoment;
//# sourceMappingURL=tutorial.compoment.js.map