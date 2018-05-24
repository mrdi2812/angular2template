import {Component} from '@angular/core';
@Component({
    selector:'my-tutorial',
    template:`<h2>Trang chủ công nghệ</h2>
    <h3 *ngIf="showLine">TUAN</h3>
    <div [ngSwitch]="color">
    <p *ngSwitchCase="'red'">Đây là màu đỏ</p>
    <p *ngSwitchCase="'blue'">Đây là màu xanh</p>
    <p *ngSwitchCase="'orange'">Đây là màu cam</p>
    <p *ngSwitchDefault>Đây là màu mặc định</p>
    </div>
    <input type="text" [(ngModel)]="color"/>
    <ul>
        <li *ngFor="let item of colors">{{item}}</li>
    </ul>
    `,
})
export class TutorialCompoment{
    public showLine = false;
    public colors: string[] = ["Trang chủ","Giới thiệu","Sản phẩm"];
}