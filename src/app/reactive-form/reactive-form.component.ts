import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
public myForm:any;
public test:boolean=false;

constructor(private formbulder:FormBuilder){
  this.myForm = this.formbulder.group({
    uname:['',[Validators.required , Validators.minLength(3)]],
    fname:['',[Validators.required , Validators.minLength(3)]],
    lname:['',[Validators.required , Validators.minLength(3)]],
    email:['',[Validators.required ,Validators.email]],
    pass:['',[Validators.required ,Validators.minLength(3)]]
  })
}


onsubmitbtn(){
 this.test=true;

}


get test2(){
  return this.myForm.controls
}
}
