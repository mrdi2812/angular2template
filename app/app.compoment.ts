import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hello TEDU Online Angular 2!</h1>
  <img [src]="image"/>
  <my-tutorial></my-tutorial>
  `,
  styles:['h4 {color:blue;}']
})
export class AppComponent { 
  public title ="TEDU";
  public image ="http://lorempixel.com/300/300";
}