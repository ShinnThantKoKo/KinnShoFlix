import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  registerForm = new FormGroup ({
    username : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.min(6)]),
    birthyear : new FormControl('',[Validators.required]),
    gender : new FormControl('',[Validators.required])
  })



  genders = ['male','female','rather not to say']

  register() {
    console.log(this.registerForm);
    console.log('$$$$$$$')
    console.log(this.registerForm.value.username)
  }


}

