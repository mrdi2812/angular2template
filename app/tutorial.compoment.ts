import {Component, Input,Output,EventEmitter} from '@angular/core';
@Component({
    selector:'my-tutorial',
    template:`
    <p>Giá trị của cha : {{name}}</p>
    <br/>
    <button [disabled]="voted" (click)="vote(true)">Đồng ý</button>
    <button [disabled]="voted" (click)="vote(false)">Không đồng ý</button>
    Kết quả : {{voted}}
    `,
})
export class TutorialCompoment{
   @Input() name :string
   @Output() onVote = new EventEmitter<boolean>();
   public voted: boolean = false;
   vote(trangthai:boolean){
        this.voted = true;
        this.onVote.emit(trangthai);
   }
   public setName(name:string){
       this.name = name;
   }
}