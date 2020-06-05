import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  form = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    EmailID: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
    MobileNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    DOB: new FormControl('', Validators.required),
  });


  get FirstName(): any { return this.form.get('FirstName'); 
  }

  get LastName(): any { return this.form.get('LastName'); 
  }

  get EmailID(): any { return this.form.get('EmailID'); 
  }

  get MobileNo(): any { return this.form.get('MobileNo'); 
  }

  get DOB(): any { return this.form.get('DOB'); 
  }

  constructor(public service: CustomerService) { 
    }

  ngOnInit() {
    this.resetForm();
  }

  createAndUpdate(currentCustomer: Customer){
    debugger;
    if(currentCustomer.CustomerID !=null){
      this.updateCustomer(currentCustomer);
    }else{
      this.createCustomer(currentCustomer);
    }
  }

  updateCustomer(customer: Customer){
    this.service.updateCustomer(customer).subscribe(response => {     
    this.resetForm();
   });
  }

  createCustomer(customer: Customer){
    this.service.createCustomer(customer).subscribe(response => {      
      this.resetForm();
    });
  }

  clear(){
    this.service.currentCustomer= {
      FirstName: '',
      LastName: '',
      EmailID: '',
      MobileNo: '',
      CustomerID: null,
      DOB: ''
    }
  }
  
  resetForm(){
    if (this.form != null)
    this.form.reset(
      {
        FirstName: '',
        LastName: '',
        EmailID: '',
        MobileNo: '',
        DOB: ''
      }
    );
    // this.service.Customer ={
    //   FirstName: '',
    //   LastName: '',
    //   EmailID: '',
    //   MobileNo: '',
    //   CustomerID: null,
    //   DOB: ''
    // }
  }

  

}