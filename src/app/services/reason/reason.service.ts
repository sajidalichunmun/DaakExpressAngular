import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReasonResponse } from 'src/app/dtos/reason-response';
import { environment } from 'src/environments/environment';

const apiBaseUrl = environment.apiBaseUrl + '/api';
const routes = {
  list: () => `${apiBaseUrl}/reason`,
  insert: () => `${apiBaseUrl}/reason`,
  update: () => `${apiBaseUrl}/reason`,
  delete: () => `${apiBaseUrl}/reason`
}

@Injectable({
  providedIn: 'root'
})
export class ReasonService {

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

  list():Observable<ReasonResponse>{
    return this.httpClient.get<ReasonResponse>(routes.list());
  }
  add(formData:any):Observable<ReasonResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.post<ReasonResponse>(routes.insert(),formData);//,{headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  update(formData:any,id:any):Observable<ReasonResponse>{

    const token = localStorage.getItem('token');
    return this.httpClient.put<ReasonResponse>(routes.update() +'/'+ id,formData);
  }

  delete(id:any):Observable<ReasonResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.delete<ReasonResponse>(routes.delete() +'/' + id);
  }

}

