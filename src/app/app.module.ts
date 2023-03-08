import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModelsComponent } from './models/models.component';
import { ModelsContentComponent } from './models/models-content/models-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
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
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

import {ClipboardModule} from '@angular/cdk/clipboard';
import { DocsComponent } from './docs/docs.component';
import {DatasetsComponent} from './datasets/datasets.component';
import { NgParticlesModule } from "ng-particles";
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
import { JarsComponent } from './jars/jars.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { FormsComponent } from './jars/forms/forms.component';

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
    JarsComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgParticlesModule,
    MatInputModule,
    MatMenuModule,
    HttpClientModule,
    MatSelectModule,
    MatButtonModule,
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
