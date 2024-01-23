import { Component } from '@angular/core';
import { UserLS } from '../create-user/create-user.component';
import { User } from 'src/app/model/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  public user: User;

  constructor(public userService: UserserviceService){}
  ngOnInit(){
    this.user = new User();
  }

  createUser(){
    if (this.validation()) {      
    //   this.userService.createUser(this.user).subscribe({ 
    //     next: (v) => console.log(v),
    //     error: (e) => console.error(e) ,
    //     complete: () => console.info('complete')}         
    // )
    this.userService.createUser(this.user).subscribe((success)=>{
      alert('Successfly created');
    },
    (error)=>{
        alert('Some issue please check');
    })
  } else {
			alert("Validation unseccessful");
		}
  }

  validation(): boolean{
    // if( this.user.role.toLowerCase() == "admin"){
    //   this.user.role = "Admin"
    // } else{
    //   this.user.role = "Non Admin"
    // }
    // const currentUserJSON = localStorage.getItem('userDetails');    
    // this.user.createdBy = JSON.parse(currentUserJSON == null ? '' : currentUserJSON);
    // this.user.createdDt = new Date();
    return true;
  }
}
