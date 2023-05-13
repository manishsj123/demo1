import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public date= new Date();
  public simple :string = "Welcome angular";
  public sk = [
    {name : "ram ", rollNo : 23},
    {name : "sita ", rollNo : 24}
  ]
  public amu :number = 1000;
}
