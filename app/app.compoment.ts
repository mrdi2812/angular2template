import { Component, ViewChild } from '@angular/core';
import { TutorialCompoment } from './tutorial.compoment';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <button (click)="changeTen()">Thay đổi</button>
  <p>Count đồng ý : {{Dongy}}  Count không đồng ý : {{Khongdongy}}</p>
  <my-tutorial *ngFor="let item of ten" [name]="item" (onVote)="checkStatus($event)"></my-tutorial>
  `,
})
export class AppComponent { 
  public title ="Hello TUAN Online Angular 2!";
  public Dongy:number=0;
  public Khongdongy:number=0;
  public ten:string[] = ['Tuấn','Loan','Văn'];
  @ViewChild(TutorialCompoment)
  public tutorrialCompoment : TutorialCompoment;
  checkStatus(trangthai:boolean){
   if(trangthai)
    this.Dongy++;
  else
    this.Khongdongy++;
  }
  changeTen(){
    this.tutorrialCompoment.setName('TUAN change');
  }
}