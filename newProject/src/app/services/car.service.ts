import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carList:any[];
  constructor() { 
    this.carList = [
      {id:1, name:"audi", model:2019},
      {id:2, name:"kia",model:2020},
      {id:3, name:"hyndai",model:2021}
    ]
  }

  DisplayAllCar()
  {
    return this.carList;
  }

  DisplayCarByName(CarName:string)
  {
    for(var i=0; i<this.carList.length; i++)
    {
      if(CarName == this.carList[i].name)
      {
        return this.carList[i]
      }
    }
    return null;
  }

  DisplayCarById(CarId:number)
  {
    for(var i=0; i<this.carList.length; i++)
    {
      if(CarId == this.carList[i].id)
      {
        return this.carList[i]
      }
    }
    return null;
  }
}
