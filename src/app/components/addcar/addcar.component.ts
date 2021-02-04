import { cartype } from './../../Models/cartype.model';
import { employee } from './../../Models/employee.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { car } from './../../Models/car.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  newcar:car = new car();
  types:cartype[];
  emp:employee[];
addcarForm = new FormGroup({
  plate: new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
  ctype: new FormControl('',[Validators.required,Validators.pattern('[0-9]')]),
  fwd: new FormControl('',[Validators.required]),
  engine_vol: new FormControl('',[Validators.required,,Validators.pattern('[0-9]{4}')]),
  year_of_prod: new FormControl('',[Validators.required,Validators.pattern('[0-9]{4}')]),
  comment: new FormControl('',[Validators.required]),
  employee: new FormControl('',[Validators.required,Validators.pattern('[0-9]')]),
  car_care: new FormControl('',[Validators.required,Validators.pattern('[0-9]{2}-[0-9]{2}-[0-9]{4}')])
  });

  constructor(private carsev:CarsService ) { }

  ngOnInit(): void {
   this.types=this.carsev.getcartype();
   this.emp=this.carsev.getemplolyee();
  }
 sendcar(){
   this.newcar.license_plate=this.addcarForm.controls.plate.value;
   this.newcar.cartype=+this.addcarForm.controls.ctype.value;
   this.newcar.fwd=this.addcarForm.controls.fwd.value;
   this.newcar.engine_vol=+this.addcarForm.controls.engine_vol.value;
   this.newcar.year_of_prod=+this.addcarForm.controls.year_of_prod.value;
   this.newcar.comment=this.addcarForm.controls.comment.value;
   this.newcar.employe=+this.addcarForm.controls.employee.value;
   let s=(this.addcarForm.controls.car_care.value).toString().split('-');
   this.newcar.car_care=s[2]+"-"+s[1]+"-"+s[0];
   if(this.carsev.findplate(this.newcar.license_plate)){
   this.carsev.addcar(this.newcar).subscribe(data => {
     
   });
  }
 }

}
