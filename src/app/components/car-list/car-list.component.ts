import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Carro {
  position: number;
  nomeCarro: string;
  anoFabricacao: number;
  anoModelo: number;
  marca: string;
  cor: string;
}

const ELEMENT_DATA: Carro[] = [
  {
    position: 1,
    nomeCarro: 'Hydrogen',
    anoFabricacao: 1.0079,
    anoModelo: 44.1,
    marca: 'kk',
    cor: 'xuxu',
  },
  {
    position: 2,
    nomeCarro: 'Hydrogen',
    anoFabricacao: 1.0079,
    anoModelo: 44.1,
    marca: 'kk',
    cor: 'xuxu',
  },
  {
    position: 3,
    nomeCarro: 'Hydrogen',
    anoFabricacao: 1.0079,
    anoModelo: 44.1,
    marca: 'kk',
    cor: 'xuxu',
  },
];

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent {
  displayedColumns: string[] = [
    'position',
    'nomeCarro',
    'anoFabricacao',
    'anoModelo',
    'marca',
    'cor',
  ];
  dataSource = ELEMENT_DATA;

 constructor(private router:Router){ } 
  cadastrarButtonClick() {
    this.router.navigate(['/car-form']);
  }
}
