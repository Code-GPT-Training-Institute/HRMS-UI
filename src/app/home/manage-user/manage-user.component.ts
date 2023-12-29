import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent { 
    public userData: any;
    tableUserHeader = [
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
    constructor(){}
    ngOnInit(){
      let dataJSON = localStorage.getItem('hrms_userInfo');
      this.userData = JSON.parse(dataJSON == null ? '' : dataJSON);
      console.log('data', this.userData);
    }
    
    idHeaderClick(){
      alert('hi')
    }
}
