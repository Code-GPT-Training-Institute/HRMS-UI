import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Country } from 'src/app/model/country';
import { State } from 'src/app/model/state';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public getCountryList: Country[];
  public countrySelected: any;
  public getStateList: State[];
  public stateSelected: any;
  public getCityList: City[];
  
  constructor(public loginservice: LoginService) {
    this.loginservice.getCountryName().subscribe(allcountryList => {
      this.getCountryList = allcountryList;
    })
  }
 
  selectedCountry(){
    console.log(this.countrySelected)
    this.loginservice.getStatebyCountry(this.countrySelected).subscribe(allStateList => {
      this.getStateList = allStateList;
    })
  }
  
  selectedState(){
    console.log(this.stateSelected);
    this.loginservice.getCitybyState(this.stateSelected).subscribe(allCityList => {
      this.getCityList = allCityList;
    })
  }

}

