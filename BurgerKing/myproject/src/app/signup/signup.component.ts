import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;



  constructor(private formbuilder:FormBuilder, private http:HttpClient ,private router:Router,private api:ApiService) { }

  ngOnInit(): void {

    this.signupForm=this.formbuilder.group({
      fullname:['',Validators.required],
      mobilenumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] ,
      address:['',Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12)
      ]]
    })
  }

  signUp(){
    console.log(this.signupForm.value);

    this.http.post<any>("http://localhost:3000/app/signupUsers",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Successfull !!");
      this.signupForm.reset();
      this.router.navigate(['login']);

    },err=>{
      alert("Something went wrong !")
    })
  }



}
