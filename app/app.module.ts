import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.compoment';
import {TutorialCompoment} from './tutorial.compoment';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule,FormsModule],
  declarations: [ AppComponent,TutorialCompoment],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }