import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public test : any = "";
  public showflag : boolean=true;
  public age : number= 20;
  public cuntry:any = ["India" , "USA", "UK", "China"];
  public selcon:any = "USA";

  public testc :any;
  constructor(){
    if(this.age > 16 && this.showflag){
      this.testc="test1";
    }else{
      this.testc="test2";
    }
  }

}
