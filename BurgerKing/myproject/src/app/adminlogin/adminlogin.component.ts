import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  public loginForm !:FormGroup;

  constructor(private formBuiler:FormBuilder, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuiler.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/app/admin")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success !!");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("Something went wrong !!")
    })
  }

}
