import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RelationRequest } from 'src/app/dtos/relation-request';
import { RelationResponse } from 'src/app/dtos/relation-response';
import { environment } from 'src/environments/environment';

const apiBaseUrl = environment.apiBaseUrl + '/api';
const routes = {
  list: () => `${apiBaseUrl}/relation`,
  insert: () => `${apiBaseUrl}/relation`,
  update: () => `${apiBaseUrl}/relation`,
  delete: () => `${apiBaseUrl}/relation`
}

@Injectable({
  providedIn: 'root'
})
export class RelationService {

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

  list():Observable<RelationResponse>{
    return this.httpClient.get<RelationResponse>(routes.list());
  }
  add(formData:any):Observable<RelationResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.post<RelationResponse>(routes.insert(),formData);//,{headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  update(formData:any,id:any):Observable<RelationResponse>{

    const token = localStorage.getItem('token');
    return this.httpClient.put<RelationResponse>(routes.update() +'/'+ id,formData);
  }

  delete(id:any):Observable<RelationResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.delete<RelationResponse>(routes.delete() +'/' + id);
  }

}
