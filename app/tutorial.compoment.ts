import {Component} from '@angular/core';
@Component({
    selector:'my-tutorial',
    template:`<h2>Trang chủ công nghệ</h2>
    <h3 [class.redClass]="applyClass">Test style class</h3>
    <h4 [style.color]="blueColor?'blue':'orange'">Check</h4>
    `,
    styles:[`.redClass{
        color : red;
    }`]
})
export class TutorialCompoment{
    public applyClass=true;
    public blueColor = false;
}