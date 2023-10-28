import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatDialogModule} from '@angular/material/dialog';
import { TodotableComponent } from './shared/components/todotable/todotable.component'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import{HttpClientModule} from '@angular/common/http';
import { TableComponent } from './shared/components/todotable/table/table.component'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FilterPipe } from './pipe/filter.pipe';
import {MatTableModule} from '@angular/material/table';
import { DeleteConfirmComponent } from './shared/components/delete-confirm/delete-confirm.component'
@NgModule({
  declarations: [
    AppComponent,
    TodotableComponent,
    TableComponent,
    FilterPipe,
    DeleteConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
