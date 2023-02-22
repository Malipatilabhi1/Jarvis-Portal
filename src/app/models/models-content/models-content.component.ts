import { Component, OnInit } from "@angular/core";
import { AngularCsv } from 'angular-csv-ext/dist/Angular-csv';

@Component({
    selector:'app-models-content',
    templateUrl:'./models-content.component.html',
    styleUrls:['./models-content.component.css']
})
export class ModelsContentComponent implements OnInit{
    
    ngOnInit(): void {
        
    }

    downloadCSV(){
        
        // new  AngularCsv(this.downloadfile, "Candidate-Details",this.csvOptions);
      }
}