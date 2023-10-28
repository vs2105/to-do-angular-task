import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Todo } from '../../model/todo';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../service/snackbar.service';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.scss']
})
export class TodotableComponent implements OnInit {

  // interface statu {
  //   value: string;
  //   viewValue: string;
  // }
  TodoForm!:FormGroup
  TodayDate=new Date()
  todoArr!:any[]
  private todos:Todo[]=[]
  constructor(private _fb:FormBuilder,
     @Inject(MAT_DIALOG_DATA) public obj:Todo,
     private _todoService: TodoService,
     private _matdialogRef: MatDialogRef<TodotableComponent>,
     private _snackbar:SnackbarService) {
    
   }
  
 

  ngOnInit(): void {
    this.createtodoform()
    this.todoArr=JSON.parse(localStorage.getItem('array')!)

    if(this.obj){
      this.TodoForm.patchValue(this.obj)
    }
    
    
  }

  createtodoform(){
   this.TodoForm=this._fb.group({
    title:['',[Validators.required]],
    assigenddate:['',[Validators.required]],
    duedate:['',[Validators.required]],
    status:['',[Validators.required]],
    file:['',[Validators.required]]
   })
   
  }

 

 
  onUpate(){
    
    this.todoArr.forEach(e => {
      if(e.id === this.obj.id){
        console.log(this.obj);

        e.title = this.TodoForm.get('title')?.value
        e.assigenddate=this.TodoForm.get('assigenddate')?.value
        e.duedate=this.TodoForm.get('duedate')?.value
       e.status=this.TodoForm.get('status')?.value
        e.file=this.TodoForm.get('file')?.value
      }
    })
    this._snackbar.addobj.next(this.todoArr)
    localStorage.setItem('array',JSON.stringify(this.todoArr))
    this._matdialogRef.close()
  }
 

  todoformsubmit(){
    console.log(this.TodoForm.value);
  let arr = JSON.parse(localStorage.getItem('array')!)||[]
  console.log(arr);
  let obj:Todo={...this.TodoForm.value,
    id: this._todoService.uuidv4()
  }
  arr.push(obj)
   localStorage.setItem('array',JSON.stringify(arr))
    // const newobj ={
    //   title:"",
    //   assigndate:Date,
    //   duedate:Date,
    //   status:"",
    //   attachment:""
    // }

  this._snackbar.addobj.next(arr)
     this._snackbar.openSnackBar("todo added sucessfully")

     this._matdialogRef.close()
  }

  onfilechange(eve:any){
   const file= eve.target.files[0]
   
   if(file){
    const filesize = file.size
    const maxsizekb=200

    if(filesize <= maxsizekb * 1024){
      // alert(`file size is ${filesize} bytes`)
      this._snackbar.openSnackBar(`file size is ${filesize} bytes`)
    }else{
      // alert(`file size exceeds the ${maxsizekb} kb limits`)
      this._snackbar.openSnackBar(`file size exceeds the ${maxsizekb} kb limits`)
    }
   }

  }

}
