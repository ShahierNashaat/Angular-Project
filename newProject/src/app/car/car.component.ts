import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  carList:any[]
  mycar:any;
  constructor(private carService:CarService) {
    this.carList = this.carService.DisplayAllCar();
   }

  ngOnInit(): void {
  }

  GetByID(id:any)
  {
    this.mycar = this.carService.DisplayCarById(parseInt(id));
  }

}
