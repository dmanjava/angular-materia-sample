import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import { MatInputModule, MatButtonModule } from '@angular/material';

import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    FormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
