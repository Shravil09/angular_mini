import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !:FormGroup;
  constructor(private formbuilder : FormBuilder,
    private _http:HttpClient,
    private router:Router
    ) { }

  ngOnInit() {
    this.signupForm = this.formbuilder.group({
      fullname:[''],
      email:[''],
      mobile : [''],
      password : ['']
      
    })
    console.log(this.signupForm);
    
  }
  signup(){
    console.log(this.signupForm.value);
    // this.router.navigate(['login']);
    this._http.post("http://localhost:3000/signup", this.signupForm.value).subscribe((response)=>{
      alert("SignUp Successfull");
      this.router.navigate(['login']);
      this.signupForm.reset();
      this.signupForm.value();
      
    },
    err=>{
      alert("Something went wrong")
    });
  }

}
