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
var tutorial_compoment_1 = require("./tutorial.compoment");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Hello TUAN Online Angular 2!";
        this.Dongy = 0;
        this.Khongdongy = 0;
        this.ten = ['Tuấn', 'Loan', 'Văn'];
    }
    AppComponent.prototype.checkStatus = function (trangthai) {
        if (trangthai)
            this.Dongy++;
        else
            this.Khongdongy++;
    };
    AppComponent.prototype.changeTen = function () {
        this.tutorrialCompoment.setName('TUAN change');
    };
    __decorate([
        core_1.ViewChild(tutorial_compoment_1.TutorialCompoment),
        __metadata("design:type", tutorial_compoment_1.TutorialCompoment)
    ], AppComponent.prototype, "tutorrialCompoment", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <button (click)=\"changeTen()\">Thay \u0111\u1ED5i</button>\n  <p>Count \u0111\u1ED3ng \u00FD : {{Dongy}}  Count kh\u00F4ng \u0111\u1ED3ng \u00FD : {{Khongdongy}}</p>\n  <my-tutorial *ngFor=\"let item of ten\" [name]=\"item\" (onVote)=\"checkStatus($event)\"></my-tutorial>\n  ",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.compoment.js.map