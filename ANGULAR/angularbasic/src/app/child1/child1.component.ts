import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  sum:number;
  sub:number;

  constructor(private calc:CalculatorService){
    this.sum=calc.getAddition(20,20);
    this.sub=calc.getSubtraction(20,30);
  }
}