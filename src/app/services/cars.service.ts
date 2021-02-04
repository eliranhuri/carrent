import { employee } from './../Models/employee.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs';
import { car } from '../Models/car.model';
import { cartype } from '../Models/cartype.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
 myurl:string=environment.myurl;
 allcars:any=[];
 types:cartype[]=[];
 emp:employee[]=[];
 
 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
     
  constructor(private http: HttpClient) {
    this.getcartype();
    this.getemplolyee();
   }

  findplate(plate:string){
    let dataSource=[...this.allcars];
    dataSource=dataSource.filter((a)=> a.license_plate == plate);
    if(dataSource.length>0){
      return false;
    }
    return true;
  }

  getallcars():Observable<car>{
    return this.http.get<car>(this.myurl+"cars");
  }

  addcar(mycar:car){
  return this.http.post(this.myurl+"cars",JSON.stringify(mycar),this.httpOptions);
  }

  getcartype():cartype[]{
    if(this.types.length==0){
      this.http.get<cartype[]>(this.myurl+"type").subscribe((data)=>{
      this.types=[...data];
     });
    }
    return this.types;
  }

  getemplolyee():employee[]{
    if(this.emp.length==0){
      this.http.get<employee[]>(this.myurl+"employee").subscribe((data)=>{
      this.emp=[...data];
      });
    }
      return this.emp;
  }
}
