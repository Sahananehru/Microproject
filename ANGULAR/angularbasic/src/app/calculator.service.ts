import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {
     
   getAddition(a:number,b:number){
    return a+b;
   }
  getSubtraction(a:number,b:number){
    return a-b;
  }
}
