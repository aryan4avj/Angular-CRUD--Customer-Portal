import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer.model';
import { Observable } from 'rxjs';


/*const headerOption= {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};  */


@Injectable()

export class CustomerService {

  Customer : Customer;

  //private dataUrl: string = "http://localhost:3000/list";
  private dataUrl: string = "https://localhost:44327/api/Customer";

  currentCustomer: Customer = {
    FirstName: '',
    LastName: '',
    EmailID: '',
    MobileNo: '',
    CustomerID: null,
    DOB: ''
  }

  constructor(private http: HttpClient) { }

  getCustomer(): Observable<Customer[]>{
   
    return this.http.get<Customer[]>(this.dataUrl)
  }

  deleteCustomer(CustomerID:number): Observable<Customer[]>{
    return this.http.delete<Customer[]>(this.dataUrl + '/' + CustomerID);
  }

  createCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.dataUrl, customer)
  }

  updateCustomer(customer: Customer): Observable<Customer[]>{
    return this.http.put<Customer[]>(this.dataUrl + '/' + customer.CustomerID, customer)
  }

}
