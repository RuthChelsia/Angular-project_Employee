import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmboxComponent } from './embox/embox.component';
import { AddEmboxComponent } from './add-embox/add-embox.component';
import { EmBoxesService } from './emboxes.service';
import { EmsService } from './ems.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import { NavHeaderComponent } from './nav-header/nav-header.component'; 
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { DisplayEmBoxComponent } from './display-em-box/display-em-box.component';
import { DisplayEmBoxDetailsComponent } from './display-em-box-details/display-em-box-details.component';
@NgModule({
  declarations: [
    AppComponent,
    EmboxComponent,
    AddEmboxComponent,
    EmpDetailsComponent,
    NavHeaderComponent,
    HomeComponent,
    DisplayEmBoxComponent,
    DisplayEmBoxDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,


  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],


  providers: [
    EmBoxesService,
    EmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
