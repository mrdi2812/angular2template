import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialCompoment } from './tutorial.compoment';
@Component({
  selector: 'my-app',
  templateUrl:'app/app.compoment.html',
})
export class AppComponent { 
  onSubmit(value:any){
    console.log(value);
  }
}