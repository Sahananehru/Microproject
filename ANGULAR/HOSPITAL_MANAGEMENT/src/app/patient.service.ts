import { Injectable } from '@angular/core';
import { Patient } from './model/Patient';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  url:string;
  patient:Patient;
  patientArr:Patient[];
  constructor(private http:HttpClient) {
    this.url="http://localhost:3009/patients";
    this.patient=new Patient();
    this.patientArr=[];
   }
  insertEmployee(patient : Patient){
    this.http.post<Patient>(this.url,patient).subscribe();
    return "Patient Details Added";
  }
  updateEmployee(patient:Patient){
    this.http.put<Patient>(this.url+"/"+patient.id,patient).subscribe();
    return "Patient Details Updated"; //go to component
}
  deleteEmployee(patId:number){
    this.http.delete<Patient>(this.url+"/"+patId).subscribe();
    return "Patient Details Deleted";
  }

  findEmployee(patId:number){
    this.http.get<Patient>(this.url+"/"+patId).subscribe(data => this.patient=data);
    return this.patient;

  }
  findAllEmployee(){
    this.http.get<Patient[]>(this.url).subscribe(data => this.patientArr=data);
    return this.patientArr;

  }
}
