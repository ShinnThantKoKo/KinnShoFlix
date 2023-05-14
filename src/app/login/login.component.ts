import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private router:Router) {

  }

  username:string = '';
  password:string = '';

  birthyear = new FormControl('');


  checkFun() {
    console.log('loging in');
    if (this.username =='KinnSho' && this.password == '198198') {
      this.router.navigateByUrl('movies')
    }
  }

  myFun() {
    console.log('&&&&&&&&&');
    console.log(this.birthyear)
    console.log(this.birthyear.value)
  }



}
