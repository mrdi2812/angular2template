import {Component} from '@angular/core';
@Component({
    selector:'my-tutorial',
    template:`<h2>Trang chủ công nghệ</h2>
    <h3 *ngIf="showLine">TUAN</h3>
   
    <div [ngSwitch]="mau">
        <p *ngSwitchCase="'xanh'">Xanh</p>
        <p *ngSwitchCase="'đỏ'">Đỏ</p>
        <p *ngSwitchCase="'tím'">Tím</p>
        <p *ngSwitchCase="'vàng'">Vàng</p>
        <p *ngSwitchDefault>Mặc định</p>
    </div>
    <button (click)="Load(name.value)">OK</button>
    <input type="text" #name/>
    <ul>
    <li *ngFor="let item of bangmau">{{item}}</li>
    </ul>
    `,
})
export class TutorialCompoment{
    public showLine = false;
    public mau;
    Load(value){
        this.mau=value;
    }
    public bangmau: string[] = ["Trang chủ","Giới thiệu","Sản phẩm"];
}