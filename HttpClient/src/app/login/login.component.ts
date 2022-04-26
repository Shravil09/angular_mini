import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  constructor(private formbuilder : FormBuilder,
    private _http:HttpClient,
    private router:Router
    ) { }

                                                    

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:[''],
      password : ['']
    })
  }
  
  login(){        
    console.log("loginData",this.loginForm.value);
    alert("Login Successfully");
   this.router.navigate(['employee']);
   

    // this._http.get<any>(this.loginForm.value).subscribe(response=>{
    //   const users = response.find((a:any)=>{
    //  //   console.log("check",users);
                        
    //     return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    //   });
    //   if(users){
    //     alert("Login Successfully");
    //     this.loginForm.reset();
    //     this.router.navigate(['employee']);
    //   }
    //   else{
    //     alert("User not found");
    //   }
    // },
    //   err=>{
    //     alert("Something went wrong");
    // }
   // );
  }
}
// function subscribe(arg0: (response: any) => void, arg1: (err: any) => void) {
//   throw new Error('Function not implemented.');
// }
