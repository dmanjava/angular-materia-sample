import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';
import {DialogComponent} from './components/dialog/dialog.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatInputModule} from '@angular/material';
import { HeaderComponent } from './components/panels/header/header.component';
import { FooterComponent } from './components/panels/footer/footer.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // {path: '', component: AppComponent},
      {path: 'form', component: FormComponent},
      {path: 'dialog', component: DialogComponent}
    ])
  ],
  declarations: [
    AppComponent,
    FormComponent,
    DialogComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
