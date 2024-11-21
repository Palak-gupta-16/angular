import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
// import { AlertComponent } from '../../../resuableComponent/alert/alert.component';
// import { Customer } from '../../../model/class/Customer';
// import { IUser } from '../../../model/interface/IUser';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  // http = inject(HttpClient)
userList: any []=[];
customerList: any [] = [];

  constructor(private http: HttpClient){

  }

  getAllUser(){
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      debugger;
      this.userList = result;
    })
  }

  getAllCustomer() {
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((res:any)=>{
      debugger;
      this.customerList =  res.data;
    }, error=>{
      debugger;
    })
}
}
