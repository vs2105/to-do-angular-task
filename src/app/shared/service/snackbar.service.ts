import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { TableComponent } from '../components/todotable/table/table.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor( private _snackBar: MatSnackBar) { }

  addobj:  Subject<any> =new Subject<any>()

  openSnackBar(msg:string) {
    this._snackBar.open(msg,'close',{
      horizontalPosition:'center',
      verticalPosition:'top',
      duration:2000
    })
  }
}
