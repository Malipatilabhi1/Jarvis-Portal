import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatasetsComponent } from './datasets/datasets.component';
import { DocsComponent } from './docs/docs.component';
import { HomeComponent } from './home/home.component';
import { JarsComponent } from './jars/jars.component';
import { ModelsContentComponent } from './models/models-content/models-content.component';
import { ModelsComponent } from './models/models.component';


const routes: Routes = [
  
  {path:'model',component:ModelsComponent},
  {path:'datasets',component:DatasetsComponent},
  {path:'model-content',component:ModelsContentComponent},
  {path:'docs',component:DocsComponent},
  {path:'',component:HomeComponent},
  {path:'jars',component:JarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
