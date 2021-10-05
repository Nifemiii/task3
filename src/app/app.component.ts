import { Component } from '@angular/core';
import {CountriesService} from './countries.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {FormGroup,FormControl,FormBuilder} from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'task3';
  data:any;
  showToast: any;
  goTopage:any;
  showToasterr: any;
  x:any;
  userForm:FormGroup;
  

  constructor(private country:CountriesService, private toastr:ToastrService, private router:Router, private formBuilder:FormBuilder) {
    this.country.getData().subscribe(data => {
      this.data= data
      console.warn(data);
      
    });

    this.userForm=formBuilder.group({
      truee:new FormControl(),
      falsee:new FormControl(),
      phoneNumber:new FormControl(),
      emailAddress:new FormControl(),
      firstName:new FormControl(),
      lastName:new FormControl(),
    });

    
    
     
    this.showToast = (pageName:string):void => {
      const isChecked = document.querySelector('.true') as HTMLInputElement;
      if (isChecked.checked) {
        this.toastr.success('Your form has been recorded', 'Successful')
        this.router.navigate([`${pageName}`]);
      } else {
        this.toastr.error('Error', 'Try Again');
      }
  

    }; 

  }

  postData(){
    console.log(this.userForm);
  }
  
}
