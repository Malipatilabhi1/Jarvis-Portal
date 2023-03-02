import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Card {
  title: string;
  subtitle: string;
  content: string;
  content1: string;
}

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent {

  // name:any;
  // url:any;
  // type:any;


//  url:any="http://3.108.153.122:8080/projects/0634f2c59c3747fa9dac7da51fcea6c9/experiments/3d936ac44690493dbefec79f6d543214/output/execution";
// Jars:any=[]
//  Array:any=[{type:'Pipeline',name:'Jarvis:8.0 Project Team NASA',url:'http://3.108.153.122:8080/projects/4cf7a62f72b84f11975fbb48ecaf21e0/experiments/c9a843952ff840459ea4aee010e07ca6/output/execution'},
//             {type:'Model' ,name:'Jarvis:8.0 Project Team NASA',url:'http://3.108.153.122:8080/projects/4cf7a62f72b84f11975fbb48ecaf21e0/experiments/6138d62b0acb4c7fbe5dc75464f20349/output/execution'},
//           {type:'Dataset',name:'Jarvis:8.0 Project Team NASA',url:'http://3.108.153.122:8080/projects/0125bc70d4c14170b6299ebadeac673e/experiments/a3e593840e3a44b291fab69d2bf03281/output/execution'},
//         {type:'Pipeline',name:'Data_Demo_Project',url:'http://3.108.153.122:8080/projects/0634f2c59c3747fa9dac7da51fcea6c9/experiments/3d936ac44690493dbefec79f6d543214/output/execution'}];
constructor(private router:Router){

}

  // navigate(){
  //   debugger
  //   this.router.navigateByUrl("http://3.108.153.122:8080/projects/0634f2c59c3747fa9dac7da51fcea6c9/experiments/3d936ac44690493dbefec79f6d543214/output/execution");
   
  // }
  // upload(){
    
  // }
  cards: Card[] = [
    {
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content1: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      content1: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      content: '1.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      content1: '2.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 4',
      subtitle: 'Subtitle 4',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      content1: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 5',
      subtitle: 'Subtitle 5',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      content1: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  
}
