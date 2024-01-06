import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent { 
    public userData: any;
    tableUserHeader: ManageUserTableHeader[] = [
      {
        name: 'S.no',
        class: 'text-start',
        event: this.idHeaderClick,
      },
      {
        name: 'User Name',
        class: 'text-start',
        event: this.idHeaderClick,
      },
      {
        name: 'Role',
        class: 'text-start',
        event: this.idHeaderClick,
      },
      {
        name: 'Created Date',
        class: 'text-start',
        event: this.idHeaderClick,
      },
      {
        name: 'Created By',
        class: 'text-start',
        event: this.idHeaderClick,
      },
    ]
    constructor(private router: Router){}
    ngOnInit(){
      let dataJSON = localStorage.getItem('hrms_userInfo');
      this.userData = JSON.parse(dataJSON == null ? '' : dataJSON);
      console.log('data', this.userData);
    }
    
    idHeaderClick(){
      alert('hi')
    }

    editUserData(event){
      console.log('event', event.id);
      this.router.navigate(['/home/create-user'], { queryParams: { id: event.id} })
    }
    deleteUserData(event){
      for(let i in this.userData){
        debugger;
        if(event.id == this.userData[i].id){
          this.userData.splice(i, 1);
          localStorage.setItem('hrms_userInfo', JSON.stringify(this.userData));
          return;
        }
      }
    }

}

export interface ManageUserTableHeader{
  name: string
  class: string
  event: Function
}
