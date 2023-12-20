import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class User {
  public userName: string;
  public age: number;
  public role: string;
  public address: string;
  public DOJ: Date; 
}

export class CreateUserComponent {  
  public userDetails: User;
  
   ngOnInit(){   
    this.userDetails = new User();
   }
  
   public userSubmit(){
     console.log(this.userDetails.userName);
   }
}

