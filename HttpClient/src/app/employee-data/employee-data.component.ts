import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  title = 'HttpClient';
  
 
  allUser:any;
  isEdit=false;
  filteredString:string="";   //pipes

  userObj={
    name:'', 
    mobile:'', 
    email:'', 
    password:'', 
    id:''
  } // for two-way binding

 
  constructor(
    private commonService : CommonService,
    private http:HttpClient
    ){}

  ngOnInit(){
      this.getLatestUser();

    
  }

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
   this.isEdit = !this.isEdit;
   this.commonService.updateUser(this.userObj).subscribe(()=>{
     this.getLatestUser();
   })
 }



}
