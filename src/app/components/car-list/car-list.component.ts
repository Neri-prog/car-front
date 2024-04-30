import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from '../../models/carro';
import { CarService } from '../../services/car.services';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent implements OnInit {
  displayedColumns: string[] = [
    'idcarro',
    'nomecarro',
    'anofabricacaocarro',
    'anomodelocarro',
    'marca',
    'cor',
  ];

 public carros: Carro[] = [];

 constructor(private router:Router,  private carservice: CarService){

  } 
  cadastrarButtonClick() {
    this.router.navigate(['/car-form']);
  }
  ngOnInit(): void {
      this.getCars();
  }
  getCars(){
   this.carservice.getAllCarros().subscribe({
      next:(result)=>this.carros = result
    });

  }
}
