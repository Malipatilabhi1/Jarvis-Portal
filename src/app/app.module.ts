import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModelsComponent } from './models/models.component';
import { ModelsContentComponent } from './models/models-content/models-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { DocsComponent } from './docs/docs.component';
import {DatasetsComponent} from './datasets/datasets.component';
import { NgParticlesModule } from "ng-particles";
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
import { JarsComponent } from './jars/jars.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModelsComponent,
    DatasetsComponent,
    DocsComponent,
    ModelsContentComponent,
    HomeComponent,
    FilterPipe,
    JarsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgParticlesModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatTabsModule,
    ClipboardModule,
    MatOptionModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
