import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
constructor(public loginservice: LoginService){}
ngOnInit(){
    this.loginservice.test = 3;
  }
}
