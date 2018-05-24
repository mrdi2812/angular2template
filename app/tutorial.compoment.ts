import {Component} from '@angular/core';
@Component({
    selector:'my-tutorial',
    template:`<h2>Trang chủ công nghệ</h2>
    <button (click)="MessageClick(name.value)">OK</button>
    <input type="text" #name/>
    `,
})
export class TutorialCompoment{
    MessageClick(value){
        console.log(value);
    }
}