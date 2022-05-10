import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { StateResponse } from 'src/app/dtos/state-response';
import { environment } from 'src/environments/environment';

const apiBaseUrl = environment.apiBaseUrl + '/api';
const routes = {
  list: () => `${apiBaseUrl}/state`,
  insert: () => `${apiBaseUrl}/state`,
  update: () => `${apiBaseUrl}/state`,
  delete: () => `${apiBaseUrl}/state`
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

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

  list():Observable<StateResponse>{
    return this.httpClient.get<StateResponse>(routes.list());
  }
  add(formData:any):Observable<StateResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.post<StateResponse>(routes.insert(),formData);//,{headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  update(formData:any,id:any):Observable<StateResponse>{

    const token = localStorage.getItem('token');
    return this.httpClient.put<StateResponse>(routes.update() +'/'+ id,formData);
  }

  delete(id:any):Observable<StateResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.delete<StateResponse>(routes.delete() +'/' + id);
  }

}
