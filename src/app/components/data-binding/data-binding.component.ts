import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
courseName: string ="angular 18";
inputType = "radio";
isIndian : boolean = false;
rollNo: number = 123;
myClassName : string = "bg-primary"
currentDate : Date = new Date();

constructor(){

}

changeCourseName(){
  this.courseName = "react js"
}

showAlert(message: string){
  alert(message)
}

}
