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
        this.cone = true;
        this.ctow = true;
        this.style = "italic";
        this.size = 11;
    }
    TutorialCompoment.prototype.Load = function () {
        this.cone = !this.cone;
        this.ctow = !this.ctow;
    };
    TutorialCompoment = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "<h2>Trang ch\u1EE7 c\u00F4ng ngh\u1EC7</h2>\n    <p [ngClass]=\"{classColor:cone,classMaunen:ctow}\">\u00C1p d\u1EE5ng style cho v\u0103n b\u1EA3n</p>\n    <button (click)=\"Load()\">OK</button>\n    <p [ngStyle]=\"{'font-style':style,'font-size':size}\">C\u1ED9ng h\u00F2a x\u00E3 h\u1ED9i ch\u1EE7 ngh\u0129a Vi\u1EC7t Nam</p>\n    ",
            styles: ["\n        .classColor{\n            color: white;\n        }\n        .classMaunen{\n            background-color:orange;\n        }\n    "]
        })
    ], TutorialCompoment);
    return TutorialCompoment;
}());
exports.TutorialCompoment = TutorialCompoment;
//# sourceMappingURL=tutorial.compoment.js.map