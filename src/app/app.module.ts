import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AddTransitionComponent } from './components/add-transition/add-transition.component';
import { AddStatusComponent, StatusDialog  } from './components/add-status/add-status.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTransitionComponent,
    AddStatusComponent,
    StatusDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
