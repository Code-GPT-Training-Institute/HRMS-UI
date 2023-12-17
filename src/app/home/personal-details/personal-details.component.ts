import { Component } from '@angular/core';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
 firstName: string = "udaya";
 middleName: string | undefined;
 lastName: string | undefined;
 emailId: string | undefined;
 mobileNumber: number | undefined;
 dateOfBirth: Date | undefined;
 nationality: String | undefined;
 gender: String | undefined;
 maritalStatus: string | undefined;
 doorNo: String | undefined;
 streetName: String | undefined;
 area: String | undefined;
 city: String | undefined;
 district: String | undefined;
 pinCode: String | undefined;
 country: String | undefined;
 state:  String | undefined;

 public profileDataSubmit(formValue: any): void{
  console.log(formValue);
  }
}
