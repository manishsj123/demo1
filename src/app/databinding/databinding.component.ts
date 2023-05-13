import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  public data : any = "";
  public age : number = 2;
  public link : any = "";
  public fname : any = "";
  constructor(){
    this.data="Hello welcome";
    if (this.age > 18){
      this.link = "https://www.facebook.com";
    }
    else {
      this.link = "https://www.google.com";
    }
}
  onclickEvent(){
    console.log("hello");
    alert("welcome");
  }
}
