import { AddcarComponent } from './components/addcar/addcar.component';
import { CarsComponent } from './components/cars/cars.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"cars" ,component:CarsComponent},
  {path:"addcars" ,component:AddcarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
