import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { TodotableComponent } from './shared/components/todotable/todotable.component';
import { DialogConfig } from '@angular/cdk/dialog';
import { SnackbarService } from './shared/service/snackbar.service';
import { Todo } from './shared/model/todo';
import { DeleteConfirmComponent } from './shared/components/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  displayedColumns: string[] = ['title', 'assigenddate', 'duedate', 'status','action'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public _matdialog:MatDialog, public _snackbar:SnackbarService){

  }

  searchInput!:string
  todoArr!:any[]
   dataSource!:MatTableDataSource<Todo>
  ngOnInit(): void {
   
     this.todoArr=JSON.parse(localStorage.getItem('array')!) || []
     
     console.log(this.todoArr);

    this.dataSource = new MatTableDataSource(this.todoArr.reverse());
     this._snackbar.addobj.subscribe(res =>{
      // this.todoArr.unshift(res)
      console.log(res);
      this.dataSource = new MatTableDataSource(res.reverse());
     })

    //  this._snackbar
  }

  todocardopen(){
    this._matdialog.open(TodotableComponent)
  }

  onformdelete(obj:any){
    console.log(obj);
    let arr =JSON.parse(localStorage.getItem('array')!)
    console.log(arr);

    // arr.forEach((e:any, i: number) => {
    //   if(e.id === obj){
    //     console.log(e);
    //     arr.splice(i,1)
    //   }
    // })

    // this._snackbar.openSnackBar("delete sucessfully")

    this._matdialog.open(DeleteConfirmComponent).afterClosed()
    .subscribe(res => {
      if(res){
        this.todoArr = arr.filter((e: any) => e.id !== obj.id)
        // console.log(this.todoArr, 'fds');
        
        localStorage.setItem('array',JSON.stringify(this.todoArr))
        this.dataSource = new MatTableDataSource(this.todoArr.reverse());
      }
    })
  }

  findobj:any

  onEdit(obj:Todo){
    let dialogConfig = new MatDialogConfig
    dialogConfig.data=obj
    dialogConfig.disableClose=true
    dialogConfig.autoFocus=true
    // this.findobj = this.todoArr.find((e,i)=>e.id === index)
    console.log(this.findobj);

    this._matdialog.open(TodotableComponent,dialogConfig)
    
  }
 
}
