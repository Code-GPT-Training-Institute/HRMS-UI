import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {
  public currentUser: any;
  
  ngOnInit(){
    const currentUserJSON = localStorage.getItem('userDetails');    
    this.currentUser = JSON.parse(currentUserJSON == null ? '' : currentUserJSON);
  }
  
}
