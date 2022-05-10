import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FranchiseeResponse } from 'src/app/dtos/franchisee-response';
import { environment } from 'src/environments/environment';

const apiBaseUrl = environment.apiBaseUrl + '/api';
const routes = {
  list: () => `${apiBaseUrl}/franchisee`,
  insert: () => `${apiBaseUrl}/franchisee`,
  update: () => `${apiBaseUrl}/franchisee`,
  delete: () => `${apiBaseUrl}/franchisee`
}

@Injectable({
  providedIn: 'root'
})
export class FranchiseeService {

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

  list():Observable<FranchiseeResponse>{
    return this.httpClient.get<FranchiseeResponse>(routes.list());
  }
  add(formData:any):Observable<FranchiseeResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.post<FranchiseeResponse>(routes.insert(),formData);//,{headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  update(formData:any,id:any):Observable<FranchiseeResponse>{

    const token = localStorage.getItem('token');
    return this.httpClient.put<FranchiseeResponse>(routes.update() +'/'+ id,formData);
  }

  delete(id:any):Observable<FranchiseeResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.delete<FranchiseeResponse>(routes.delete() +'/' + id);
  }

}

