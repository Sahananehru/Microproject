import { Component } from '@angular/core';
import { Patient } from './model/Patient';
import { PatientService } from './patient.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HOSPITAL_MANAGEMENT';
  patient:Patient;
  result:string;
  patientArr:Patient[];
  flag:boolean;

constructor(private service:PatientService){
  this.patient=new Patient();
  this.result=" ";
  this.patientArr=[];
  this.flag=false;
}
insertPatient(data:any)
{
  this.patient.id=data.patId;
  this.patient.patName=data.patName;
  this.patient.patward=data.patward;
  this.patient.patdisease=data.patdisease;
  
  this.result=this.service.insertEmployee(this.patient)
  // this.service.insertEmployee(this.employee);
  // alert(data.empId+" "+data.empName+" "+data.empSalary);
}
updatePatient(data:any){
  this.patient.id=data.patId;
  this.patient.patName=data.patName;
  this.patient.patward=data.patward;
  this.patient.patdisease=data.patdisease;

  this.result=this.service.updateEmployee(this.patient);
}
deletePatient(data:any){

this.result=this.service.deleteEmployee(data.patId);
}
findPatient(data:any){
this.patient=this.service.findEmployee(data.patId);
this.result=this.patient.id+" "+this.patient.patName+" "+this.patient.patward+" "+this.patient.patdisease;
}
findAllPatient(){
  this.patientArr=this.service.findAllEmployee();
  this.flag=true;
  }
}

