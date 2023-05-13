import { Component } from '@angular/core';

@Component({
  selector: 'app-myform-r',
  templateUrl: './myform-r.component.html',
  styleUrls: ['./myform-r.component.css']
})
export class MyformRComponent {
  public allFormData: any = [];

  public courses: any = ['Engineering', "MCA", "BTech Agri", "MCS", "MSC"];

  public fn: any = "";
  public ln: any = "";
  public em: any = "";
  public cor: any = "";
  public gen: any = "";
  public ps: any = "";
  public cps: any = "";

  public idd: any;
  public count: number = 1;

  public showFlag: boolean = false;

  constructor() {

  }

  onSubmitData(fomrData: any) {

    console.log(fomrData.value);

   
    if (fomrData.value.id == undefined) {
    
      fomrData.value.id = this.count;
      this.allFormData.push(fomrData.value);
      if (this.allFormData.length > 0) {
        this.showFlag = true;
      }
      this.count++;
    } else {
    
      console.log(fomrData.value);
      this.allFormData.forEach((element: any) => {
        if (fomrData.value.id == element.id) {
          console.log(element);
        
          element.fname = fomrData.value.fname;
          element.lname = fomrData.value.lname;
          element.eml = fomrData.value.eml;
          element.course = fomrData.value.course;
          element.gender = fomrData.value.gender;
          element.pass = fomrData.value.pass;
          element.cpass = fomrData.value.cpass;
        }
      });
      console.log(this.allFormData);
    }
  }

  onDeleteData(dt: any) {
    console.log(dt);
    
    console.log(this.allFormData);
    this.allFormData.forEach((element: any, index: any) => {
      
      if (element.id == dt.id) {
        
        this.allFormData.splice(index, 1);
      }
    });

  }

  onUpdateData(dt: any) {
    console.log(dt);
    this.idd = dt.id;
    this.fn = dt.fname;
    this.ln = dt.lname;
    this.em = dt.eml;
    this.cor = dt.course;
    this.gen = dt.gender;
    this.ps = dt.pass;
    this.cps = dt.cpass;
    
  }

  onUpdate(){
    
  }

}

