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
        this.applyClass = true;
        this.blueColor = false;
    }
    TutorialCompoment = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "<h2>Trang ch\u1EE7 c\u00F4ng ngh\u1EC7</h2>\n    <h3 [class.redClass]=\"applyClass\">Test style class</h3>\n    <h4 [style.color]=\"blueColor?'blue':'orange'\">Check</h4>\n    ",
            styles: [".redClass{\n        color : red;\n    }"]
        })
    ], TutorialCompoment);
    return TutorialCompoment;
}());
exports.TutorialCompoment = TutorialCompoment;
//# sourceMappingURL=tutorial.compoment.js.map