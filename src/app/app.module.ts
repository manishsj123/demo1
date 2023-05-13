import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Stud1Component } from './stud1/stud1.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { MyformRComponent } from './myform-r/myform-r.component';
import { DirectivesComponent } from './directives/directives.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Stud1Component,
    TemplateFormComponent,
    DatabindingComponent,
    MyformRComponent,
    DirectivesComponent,
    ReactiveFormComponent,
    PipesComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
