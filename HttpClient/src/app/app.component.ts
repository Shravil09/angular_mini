import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpClient';
  allUser:any;
  isEdit=false;
 

  userObj={
    name:'', mobile:'', email:'', password:'', id:''
  } // for two-way binding

  
  onInit(){
    this.getLatestUser();
  }
  
  constructor(
    private commonService : CommonService,
     private http:HttpClient){}
     
  addUser(formObj: any){
    console.log(formObj);
    this.commonService.createUser(formObj).subscribe((response)=>{
      console.log("User Has Been Added");
      this.getLatestUser();
    });
  }
    getLatestUser(){
      this.commonService.getAllUser().subscribe((response)=>{
        console.log("User Data Fretched Successfully");
        this.allUser = response
    });
  }

  editUser(user:any){
    this.isEdit=true;
    this.userObj = user;
  }
  
  deleteUser(user: any){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    });
 }
 updateUser(){
   this.commonService.updateUser(this.userObj).subscribe(()=>{
     this.getLatestUser();
   })
 }
}

function user(user: any) {
  throw new Error('Function not implemented.');
}