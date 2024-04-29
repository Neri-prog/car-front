import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../services/car.services';


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.scss'
})
export class CarFormComponent {
  constructor(private router:Router, private carService:CarService){ } 

cadastrarButtonClick() {
  this.carService.save({}).subscribe();
  this.router.navigate(['/car-list']);
}

}
