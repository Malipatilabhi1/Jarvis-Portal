import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray,FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Component({
  selector: 'app-jars',
  templateUrl: './jars.component.html',
  styleUrls: ['./jars.component.css'],
 
})
export class JarsComponent implements OnInit {

  name:any;
  id:any;
  data_name:any;
  version:any;
  desc:any;

  ab:any=[];
  selectedApps:any;
  Array:any=[];
  Modules:any=[];
  Dataset:any=[];
  Engin:any=[];
  frontend:any=[];
  Solution:any=[];
  ishidden:boolean=false;
  

  // Arr:any=[{type:'Pipeline',name:'Jarvis:8.0 Project Team NASA',url:'http://3.108.153.122:8080/projects/4cf7a62f72b84f11975fbb48ecaf21e0/experiments/c9a843952ff840459ea4aee010e07ca6/output/execution'},
  //           {type:'Model' ,name:'Jarvis:8.0 Project Team NASA',url:'http://3.108.153.122:8080/projects/4cf7a62f72b84f11975fbb48ecaf21e0/experiments/6138d62b0acb4c7fbe5dc75464f20349/output/execution'},
  //         {type:'Dataset',name:'Jarvis:8.0 Project Team NASA',url:'http://3.108.153.122:8080/projects/0125bc70d4c14170b6299ebadeac673e/experiments/a3e593840e3a44b291fab69d2bf03281/output/execution'},
  //       {type:'Pipeline',name:'Data_Demo_Project',url:'http://3.108.153.122:8080/projects/0634f2c59c3747fa9dac7da51fcea6c9/experiments/3d936ac44690493dbefec79f6d543214/output/execution'}];

  constructor(private formBuilder: FormBuilder,private http:HttpClient){

     
  }
  ngOnInit(): void {
    this.fetchData();
  }
  

  formdata = this.formBuilder.group({
          type:[],
          name:[],
          id:[] ,
          version:[],
          desc:[]
          })

  formdata1 = this.formBuilder.group({
    dataset_name:[],
    dataset_project:[] ,
    dataset_id:[],
    version:[],
    description:[]
    }) 
    
    formdata2 = this.formBuilder.group({
      type:[],
      dataset_name:[],
      dataset_project:[] ,
      dataset_url:[],
      }) 

  //   appsList = [
  //   {value: 'app_1', results: 'App1-result', name: 'APP 1'},
  //  {value: 'app_2', results: 'App2-result', name: 'APP 2'},
  //  {value: 'app_3', results: 'App3-result', name: 'APP 3'}
  //  ];
   
  //  getAppList(){
  //      console.log('getAppList');
  //     //  console.log(this.selectedApps);
  //    }

  upload(){
    debugger
    this.name=this.formdata.controls['type'].value;
    this.data_name=this.formdata.controls['name'].value;
    this.id=this.formdata.controls['id'].value;
    this.version=this.formdata.controls['version'].value;
    this.desc=this.formdata.controls['desc'].value;
    // this.Array={desc:this.type,name:this.name,url:this.url}
    this.Array.push({Type:this.name,Name:this.data_name,Id:this.id,Version:this.version,Desc:this.desc});
    
    this.http.post('https://jarvis-test-336a1-default-rtdb.firebaseio.com/Jars.json',this.Array)
    .subscribe(response =>console.log(response));
  }


  Jars:any=[{id:1,name:'Model'},{id:2,name:'Dataset'},{id:3,name:'Pipeline'}]
  Model:any=[{id:1,name:'Local Copy'},{id:2,name:'Remote Copy'},{id:3,name:'Using Id'}]
  data:any=[];
  store:any=[];

  fetchData(){
    this.http.get('https://jarvis-test-336a1-default-rtdb.firebaseio.com/Jars.json')
    .pipe(map((data: { [x: string]: any; hasOwnProperty: (arg0: string) => any; })=>{
      const sample=[];
      for(const key in data){
        if(data.hasOwnProperty(key)){
          sample.push(...data[key])
        }
      }
      return sample ; 
    }))
    .subscribe(
      (response) =>{
        this.data=response
        console.log(this.data)
        debugger
        this.LoadData(this.data);
      })  
  }

  selected(){
debugger
console.log(this.formdata2.controls.type.value)
  }

  LoadData(data:any){
    for(let i=0;i<data.length;i++ ){
      // console.log(data[i])
      this.store=data;
      this.ab.push(data[i].name);
      if(this.store[i].name=='Pipeline'){
        this.Engin.push(data[i]);
       
      }else if(this.store[i].name=='Model'){
        this.Modules.push(data[i]);
        
      }else if(this.store[i].Type=='Dataset'){
        this.Dataset.push(data[i]);
        console.log(this.Dataset)
      }

      
    }
console.log(this.ab)
  }

  copytext(){
    navigator.clipboard.writeText(this.value1);
  }
ds:boolean=true;
mdl:boolean=false;
jar:any;

SelectJar(){
this.jar=this.formdata.controls['type'].value;
    debugger
     if(this.jar=='Dataset'){
      this.ds=false;
     }else if(this.jar=='Model'){
      this.mdl=true;
     }
  }

  value1:any='Enter all API_Data to generate the Script';
  new_dataset_name:any='';
  dataset_id:any='';
  new_dataset_project_name:any='';

DownloadData(){
  this.new_dataset_name=this.formdata1.controls['dataset_name'].value;
  this.dataset_id=this.formdata1.controls['dataset_id'].value;
  this.new_dataset_project_name=this.formdata1.controls['dataset_project'].value;

this.value1=`
from clearml import Dataset

#Get the dataset using Dataset Id
dataset = Dataset.get("${this.dataset_id}")

#Get the physical location of the dataset
url = dataset._task.artifacts['data'].url
  
# Create a dataset with ClearML\`s Dataset class
new_dataset = Dataset.create(dataset_name="${this.new_dataset_name}",
                  dataset_project="${this.new_dataset_project_name}") 

#Add the example url                 
new_dataset.add_external_files(source_url=url)

# Upload dataset to ClearML server (customizable)
new_dataset.upload() 

# commit dataset changes
new_dataset.finalize()
  `
  }

  setDataValues(data:any){
    this.formdata1.controls['dataset_name'].setValue(data.Name);
    this.formdata1.controls['dataset_id'].setValue(data.Id);
  }
  
  // value1=`# create example dataset
  // from clearml import StorageManager, Dataset
  
  // # Download sample csv file
  // csv_file = StorageManager.get_local_copy(
  //     remote_url="https://vincentarelbundock.github.io/Rdatasets/csv/AER/Affairs.csv"
  // )
  
  // # Create a dataset with ClearML\`s Dataset class
  // dataset = Dataset.create(
  //     dataset_project="DatasetProject", dataset_name="HelloDataset"
  // )
  
  // # add the example csv
  // dataset.add_files(path=csv_file)
  
  // # Upload dataset to ClearML server (customizable)
  // dataset.upload()
  
  // # commit dataset changes
  // dataset.finalize()`;




  
  
}

