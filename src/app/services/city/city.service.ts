import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CityResponse } from 'src/app/dtos/city-response';
import { environment } from 'src/environments/environment';

const apiBaseUrl = environment.apiBaseUrl + '/api';
const routes = {
  list: () => `${apiBaseUrl}/city`,
  insert: () => `${apiBaseUrl}/city`,
  update: () => `${apiBaseUrl}/city`,
  delete: () => `${apiBaseUrl}/city`
}

@Injectable({
  providedIn: 'root'
})
export class CityService {

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

  list():Observable<CityResponse>{
    return this.httpClient.get<CityResponse>(routes.list());
  }
  add(formData:any):Observable<CityResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.post<CityResponse>(routes.insert(),formData);//,{headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  update(formData:any,id:any):Observable<CityResponse>{

    const token = localStorage.getItem('token');
    return this.httpClient.put<CityResponse>(routes.update() +'/'+ id,formData);
  }

  delete(id:any):Observable<CityResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.delete<CityResponse>(routes.delete() +'/' + id);
  }

}
