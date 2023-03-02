import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray,FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

@Output() FormsComponent = new EventEmitter<string>();

constructor(private formBuilder: FormBuilder){}

AddModelJar = this.formBuilder.group({
  dataset_name:['',Validators.required],
  dataset_project:['',Validators.required] ,
  dataset_id:[],
  version:[],
  description:[]
  }) 
}
