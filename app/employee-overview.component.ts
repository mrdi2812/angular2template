import {Component, OnInit, OnDestroy} from'@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector:'employee-overviewer',
    template:`<h3>Overviewer template</h3>`
})
export class EmployeeOverViewerComponent implements OnInit,OnDestroy{
    public routerId : number;
    public sub :Subscription;
    constructor(private router :Router,private activedRouter :ActivatedRoute){
    }
    ngOnInit(){
        this.sub = this.activedRouter.parent.params.subscribe(paras=>{
            this.routerId = paras['id'];
            alert(this.routerId);
        })
    }
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
}