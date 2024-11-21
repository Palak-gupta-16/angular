import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  deptList: any[] = [];
  deptObj:any = {
    "departmentId" : 0,
    "departmentName" : "",
    "departmentLogo" : ""
  }

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getDepartment();
  }

  onEdit(data: any) {
    this.deptObj = data;
  }
  onDelete(id: number) {
    debugger;
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +id).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        alert("Department Created Success");
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })
    
  }

   onSave() {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        alert("Department Created Success");
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })
  }
  onUpdate() {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        alert("Department updated Success");
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })
  }
   getDepartment() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
      this.deptList = res.data;
    })
  }
}
