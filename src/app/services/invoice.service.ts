import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  AdmissionData = [
    {id: 1, name: 'amol',dateOfBirth:new Date(),address:'pune'},
    {id: 2, name: 'soham',dateOfBirth:new Date(),address:'mumbai'},
    {id: 3, name: 'sandip',dateOfBirth:new Date(),address:'delhi'},
    {id: 4, name: 'sagar',dateOfBirth:new Date(),address:'gujrat'},
    {id: 1, name: 'amol',dateOfBirth:new Date(),address:'pune'},
    {id: 2, name: 'soham',dateOfBirth:new Date(),address:'mumbai'},
    {id: 3, name: 'sandip',dateOfBirth:new Date(),address:'delhi'},
    {id: 4, name: 'sagar',dateOfBirth:new Date(),address:'gujrat'},
    {id: 1, name: 'amol',dateOfBirth:new Date(),address:'pune'},
    {id: 2, name: 'soham',dateOfBirth:new Date(),address:'mumbai'},
    {id: 3, name: 'sandip',dateOfBirth:new Date(),address:'delhi'},
    {id: 4, name: 'sagar',dateOfBirth:new Date(),address:'gujrat'},
    
  ]
  constructor(private httpClient: HttpClient, private router: Router) { }
  
  getAdmissionDetails(){
    return this.AdmissionData;
  }

 GetHttpHeaders() : HttpHeaders {
  const headers = new HttpHeaders().set('content-type', 'application/json');
  return headers;
}


addNewInvoice(param: any): Observable<any> {
  return this.httpClient.post( environment.addNewInvoice, param, { headers: this.GetHttpHeaders() });
  }

getAllInvoice(): Observable<any>{                                
return this.httpClient.get(environment.getAllInvoice, {headers: this.GetHttpHeaders()});
}

getAllVender(): Observable<any>{                                
  return this.httpClient.get(environment.getAllVender, {headers: this.GetHttpHeaders()});
  }

getVenderById(id): Observable<any> {
return this.httpClient.get(environment.getVenderById + '/' + id, { headers: this.GetHttpHeaders() });
}

updateVenderById(param: any): Observable<any> {
return this.httpClient.post(environment.updateVenderById, param, { headers: this.GetHttpHeaders() });
}

DeleteVenderById(param: any): Observable<any> {
return this.httpClient.put(environment.DeleteVenderById, param, { headers: this.GetHttpHeaders() });
}

}
