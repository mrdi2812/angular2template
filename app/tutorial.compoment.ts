import {Component} from '@angular/core';
@Component({
    selector:'my-tutorial',
    template:`<h2>Trang chủ công nghệ</h2>
    <p [ngClass]="{classColor:cone,classMaunen:ctow}">Áp dụng style cho văn bản</p>
    <button (click)="Load()">OK</button>
    <p [ngStyle]="{'font-style':style,'font-size':size}">Cộng hòa xã hội chủ nghĩa Việt Nam</p>
    `,
    styles:[`
        .classColor{
            color: white;
        }
        .classMaunen{
            background-color:orange;
        }
    `]
})
export class TutorialCompoment{
 public cone = true;
 public ctow = true;
 public style = "italic";
 public size = 11;
 Load(){
     this.cone = !this.cone;
     this.ctow = !this.ctow;
 }
}