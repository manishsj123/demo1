import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  // public data : any = "";
  public alldata:any =[];
  onSubmit(data:any){
    console.log(data.value);
    this.alldata.push(data.value);
    console.log(this.alldata);
  }
}
