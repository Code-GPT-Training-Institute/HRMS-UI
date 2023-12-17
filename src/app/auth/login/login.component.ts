import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  //  public username: string = '';
  //  public password: string = '';
  public enableLoginButton: Boolean = false;
  public currentUser: [] | undefined;
  private currentUserDetails: object | undefined;
  
  
  loginUserForm : FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, public loginService: LoginService, private Router: Router){}

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
          //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,12}$'),
          //Validators.pattern('^(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,12}$'),
          Validators.minLength(6),
          Validators.maxLength(12),          
        ],
      ]
    })
  }

  
  get formGetControls(){
    return this.loginUserForm.controls;
  }
  
  loginSubmit(){
    debugger;
    this.submitted = true;    

    if (this.loginUserForm.invalid) {
      return;
    }
    this.currentUserDetails = {
      usrName : this.loginUserForm.value.userName,
      userRole : "admin",
      token: "abcdefghijk"
    }
    
    localStorage.setItem('userDetails', JSON.stringify(this.currentUserDetails))
   // console.log(JSON.stringify(this.loginUserForm.value, null, 2));
    this.Router.navigate(['/home']);
  }

  public validateUserName() {
    this.loginService.validateUserName(this.loginUserForm.value.userName).subscribe(isValidUserName => {
      this.enableLoginButton = isValidUserName;
    })
  }


}
