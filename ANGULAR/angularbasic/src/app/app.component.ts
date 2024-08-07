import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sum:number;
  constructor(private calc:CalculatorService){
    this.sum=calc.getAddition(10,20);
  }
}
//   title='angularbasic';
//   name:string;
//     age:number;
//     email: string;
//     imagePath:string;
//     fname:string;
//     flag:boolean;
//   vehicles:string[];
//   selectedVehicle:string;
//   myStyle:{};
//   myClass:String;

    
//     constructor(){
//       this.name="Sahana";
//       this.age=20;
//       this.email="sahanakrish.n27@gmail.com";
//       this.imagePath="./assets/logo.png";
//       this.flag=true;
//       this.fname="";
//     this.vehicles=["Two","three","four"];
//     this.selectedVehicle="";
//     this.myStyle={'width':'40%','border':'2px solid blue','border-radius':'50px'};
//     this.myClass="MYClass1";
//     }                                                                                   
// changeName(){
//   this.name="SAHA";
// }

// changeAge(){
//   this.age=21;
// }

// changeEmail(){
//   this.email="sahanancse2022@gmail.com"
// }
// changeImage(){
//   this.imagePath="./assets/logo2.png"
// }
// changeFlag(){
//   this.flag=!this.flag;
//   }
  
//   setSelectedItem(v:string){
//    this.selectedVehicle=v; 
//   }
//   changeStyle(){
//     this.myStyle={'width':'40%','border':'2px solid gold','border-radius':'25px'};
//   }
// }