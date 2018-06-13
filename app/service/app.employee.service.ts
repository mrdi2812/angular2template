import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService{
    private apiUrl = "http://5b0ec63e3c5c110014145c4f.mockapi.io/api/employees/";
    constructor(private _http:Http){       
    }
    GetList():Observable<any[]>{
     return this._http.get(this.apiUrl).map((response: Response)=>response.json());
    }
    GetDetail(id: number):Observable<any>{
        const url = `${this.apiUrl}/${id}`;
        return this._http.get(url).map((response: Response)=>response.json());
    }
    AddData(data:any):Observable<any>{
        const  url = `${this.apiUrl}`;
        return this._http.post(this.apiUrl,data).map((response: Response)=>response.json());
    }
    UpdateData(data:any):Observable<any>{
        const  url = `${this.apiUrl}/${data.id}`;
        return this._http.put(url,data).map((response: Response)=>response.json());
    }
    DeleteData(id:number):Observable<any>{
        const  url = `${this.apiUrl}/${id}`;
        return this._http.delete(url).map((response: Response)=>response.json());
    }
    SeachData(chuoi:string):Observable<any>{
        const  url = `${this.apiUrl}/?search=${chuoi}`;
        return this._http.get(url).map((response: Response)=>response.json());
    }
}