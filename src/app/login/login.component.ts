import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  //  public username: string = '';
  //  public password: string = '';
  public enableLoginButton: Boolean = false;
  
  loginUserForm : FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private loginService: LoginService){}

  ngOnInit(): void{
    this.loginUserForm = this.formBuilder.group({
      userName: [
        '',[
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9+_.-]+@codegpt.com+$')
        ],
      ],
      password: [
        '', [
          Validators.required,
          //Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,12}$"),
          Validators.pattern('^(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,12}$'),
          Validators.minLength(6),
          Validators.maxLength(12),          
        ],
      ]
    })
  }

  
  get f(){
    return this.loginUserForm.controls;
  }
  
  loginSubmit(){
    this.submitted = true;    

    if (this.loginUserForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.loginUserForm.value, null, 2));
  }

  public validateUserName() {
    this.loginService.validateUserName(this.loginUserForm.value.userName).subscribe(isValidUserName => {
      this.enableLoginButton = isValidUserName;
    })
  }


}
