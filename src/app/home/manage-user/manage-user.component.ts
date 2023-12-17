import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent {
    public userData: any;
    constructor(){}
    ngOnInit(){
      let dataJSON = localStorage.getItem('HRMS_userDetails');
      this.userData = JSON.parse(dataJSON == null ? '' : dataJSON);
      console.log('data', this.userData);
    }
}
