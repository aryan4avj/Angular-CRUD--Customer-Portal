import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  allCustomer: Customer[];

  constructor(public service: CustomerService) { }

  ngOnInit() {
    this.getALLCustomer();
  }

  getALLCustomer(){
    this.service.getCustomer().subscribe(
      (data: Customer[]) => {
        this.allCustomer = data;
      } 
    );
  }

  edit(customer){
    this.service.currentCustomer = Object.assign( {}, customer);
  }

  deleteCustomer(CustomerID:number){
    this.service.deleteCustomer(CustomerID).subscribe(
      (data: Customer[]) => {
        this.getALLCustomer();
      } 
    );
  }

  
}
