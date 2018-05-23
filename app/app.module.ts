import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.compoment';
import {TutorialCompoment} from './tutorial.compoment';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,TutorialCompoment],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }