import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errMsg:string=" ";
  constructor() { }

  ngOnInit() {
  }
  submitFunc()
  {
   
    
    this.errMsg='Sign-up sucessfull'
    
    
    
  }

}
