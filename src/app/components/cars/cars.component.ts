import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { car } from 'src/app/Models/car.model';
import { employee } from 'src/app/Models/employee.model';
import { cartype } from 'src/app/Models/cartype.model';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  allcars:any;
  types:cartype[];
  emp:employee[];
  constructor(private carsser:CarsService) { }

  ngOnInit(): void {
    this.types=this.carsser.getcartype();
    this.emp=this.carsser.getemplolyee();
    this.carsser.getallcars().subscribe(data=>{
    this.carsser.allcars=data;
    this.allcars=data;
    })
  }

}
