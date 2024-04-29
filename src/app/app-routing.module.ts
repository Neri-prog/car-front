import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarFormComponent } from './components/car-form/car-form.component';

const routes: Routes = [
  {path:'', redirectTo:'car-list', pathMatch:'full'},
  {path:'car-list', component: CarListComponent},
  {path:'car-form', component: CarFormComponent},
  {path:'car-form/:id', component: CarFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
