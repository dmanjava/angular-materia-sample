import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { MatInputModule, MatButtonModule } from '@angular/material';

import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
