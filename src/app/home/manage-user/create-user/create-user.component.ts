import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  public currentUser: UserLS;
  existingUserStatus: any = localStorage.getItem('hrms_userInfo');
  existingUser: UserLS[] = this.existingUserStatus === null ? [] : JSON.parse(localStorage.getItem('hrms_userInfo'));

  public currentUserId: number;
  public userData: any;
  private userQueryId: number;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {    
    this.userQueryId = +this.route.snapshot.queryParamMap.get('id');
    this.currentUser = new UserLS();
    debugger; 
    if (this.userQueryId == null || this.userQueryId == undefined || this.userQueryId == 0) {
      // this.currentUser = new User();
      this.currentUserId = this.existingUser.length + 1;
    } else {      
      for (let user of this.existingUser) {
        if (this.userQueryId == user.id) {
          this.currentUser = user;          
          return;
        }
      }
    }
  }

  public userSubmit() {
     debugger; 
    if (this.userQueryId == null || this.userQueryId == undefined || this.userQueryId == 0) {
        this.currentUser.id = this.currentUserId;
        console.log('currentUserData', this.currentUser)
        this.existingUser.push(this.currentUser);
        localStorage.setItem('hrms_userInfo', JSON.stringify(this.existingUser));
    } else {
      for (let user of this.existingUser) {
        if(this.userQueryId == user.id){
          this.currentUser.id = user.id;
          localStorage.setItem('hrms_userInfo', JSON.stringify(this.existingUser));
          return
        }
      }
    }
        
    
  }
}
export class UserLS {
  public id: number;
  public userName: string;
  public password: string;
  public role: string;
  public createdDate: Date;
  public createdBy: string;
}
