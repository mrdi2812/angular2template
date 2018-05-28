import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.compoment';
import {TutorialCompoment} from './tutorial.compoment';
import {FormsModule} from '@angular/forms';
import {ReverseStr} from './reverse-str.pipe';
import {UselessPipe} from './reverse-str.pipe';
@NgModule({
  imports:      [ BrowserModule,FormsModule],
  declarations: [ AppComponent,TutorialCompoment,ReverseStr,UselessPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }