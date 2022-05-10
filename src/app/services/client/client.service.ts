import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClientResponse } from 'src/app/dtos/client-response';
import { environment } from 'src/environments/environment';

const apiBaseUrl = environment.apiBaseUrl + '/api';
const routes = {
  list: () => `${apiBaseUrl}/client`,
  insert: () => `${apiBaseUrl}/client`,
  update: () => `${apiBaseUrl}/client`,
  delete: () => `${apiBaseUrl}/client`
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required)
  });

  constructor(private httpClient: HttpClient) { }

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: ''
    });
  }

  populateForm(selectedData)
  {
    this.form.setValue({'id':selectedData['ID'],'name': selectedData['Name']});
  }

  list():Observable<ClientResponse>{
    return this.httpClient.get<ClientResponse>(routes.list());
  }
  add(formData:any):Observable<ClientResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.post<ClientResponse>(routes.insert(),formData);//,{headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  update(formData:any,id:any):Observable<ClientResponse>{

    const token = localStorage.getItem('token');
    return this.httpClient.put<ClientResponse>(routes.update() +'/'+ id,formData);
  }

  delete(id:any):Observable<ClientResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.delete<ClientResponse>(routes.delete() +'/' + id);
  }

}

