import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModelsComponent } from './models/models.component';
import { ModelsContentComponent } from './models/models-content/models-content.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { DatasetsComponent } from './datasets/datasets.component';
import { DocsComponent } from './docs/docs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModelsComponent,
    DatasetsComponent,
    DocsComponent,
    ModelsContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
