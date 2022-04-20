import { Component, OnInit } from '@angular/core';


import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user:User;
   errMsg:string=" ";
  constructor( ) {
     this.user=new User();
     this.Validate();
   }

  ngOnInit() {
  }
  Validate()
  {
    let uname=this.user.userName;
    let pwd=this.user.password;
    
    if(uname=="Harshith" && pwd=="Harshith123")
    {
       this.errMsg="Login sucess";
      
      
     
    }
    else
    {
      this.errMsg='Pls Enter Username and Password'
    }
  }

}
