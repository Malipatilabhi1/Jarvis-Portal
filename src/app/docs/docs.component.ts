import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent {

  name:any;
  url:any;
  type:any;


//  url:any="http://3.108.153.122:8080/projects/0634f2c59c3747fa9dac7da51fcea6c9/experiments/3d936ac44690493dbefec79f6d543214/output/execution";

 Array:any=[{type:'Pipeline',name:'Jarvis:8.0 Project Team NASA',url:'http://3.108.153.122:8080/projects/4cf7a62f72b84f11975fbb48ecaf21e0/experiments/c9a843952ff840459ea4aee010e07ca6/output/execution'},
            {type:'Model' ,name:'Jarvis:8.0 Project Team NASA',url:'http://3.108.153.122:8080/projects/4cf7a62f72b84f11975fbb48ecaf21e0/experiments/6138d62b0acb4c7fbe5dc75464f20349/output/execution'},
          {type:'Dataset',name:'Jarvis:8.0 Project Team NASA',url:'http://3.108.153.122:8080/projects/0125bc70d4c14170b6299ebadeac673e/experiments/a3e593840e3a44b291fab69d2bf03281/output/execution'},
        {type:'Pipeline',name:'Data_Demo_Project',url:'http://3.108.153.122:8080/projects/0634f2c59c3747fa9dac7da51fcea6c9/experiments/3d936ac44690493dbefec79f6d543214/output/execution'}];
constructor(private router:Router){

}

  navigate(){
    debugger
    this.router.navigateByUrl("http://3.108.153.122:8080/projects/0634f2c59c3747fa9dac7da51fcea6c9/experiments/3d936ac44690493dbefec79f6d543214/output/execution");
   
  }
  upload(){
    
  }
}
