import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialCompoment } from './tutorial.compoment';
@Component({
  selector: 'my-app',
  templateUrl:'app/app.compoment.html',
  styleUrls:['app/app.compoment.css'],
})
export class AppComponent { 
  public cities= [{Id:1,Name:"Hà Nội"},{Id:2,Name:"Hồ Chí Minh"}];
  onSubmit(value:any){
    console.log(value);
  }
}