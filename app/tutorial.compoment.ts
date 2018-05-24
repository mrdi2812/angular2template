import {Component} from '@angular/core';
@Component({
    selector:'my-tutorial',
    template:`<h2>Trang chủ công nghệ</h2>
    <input type="text" [(ngModel)]="fname"/>
    <input type="text" [(ngModel)]="lname"/>
    <br/>
    Fullname : {{fname}} {{lname}}
    `,
})
export class TutorialCompoment{
    MessageClick(value){
        console.log(value);
    }
}