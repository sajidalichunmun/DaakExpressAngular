import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SubCityResponse } from 'src/app/dtos/sub-city-response';
import { environment } from 'src/environments/environment';

const apiBaseUrl = environment.apiBaseUrl + '/api';
const routes = {
  list: () => `${apiBaseUrl}/subcity`,
  insert: () => `${apiBaseUrl}/subcity`,
  update: () => `${apiBaseUrl}/subcity`,
  delete: () => `${apiBaseUrl}/subcity`
}

@Injectable({
  providedIn: 'root'
})
export class SubcityService {

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

  list():Observable<SubCityResponse>{
    return this.httpClient.get<SubCityResponse>(routes.list());
  }
  add(formData:any):Observable<SubCityResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.post<SubCityResponse>(routes.insert(),formData);//,{headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  update(formData:any,id:any):Observable<SubCityResponse>{

    const token = localStorage.getItem('token');
    return this.httpClient.put<SubCityResponse>(routes.update() +'/'+ id,formData);
  }

  delete(id:any):Observable<SubCityResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.delete<SubCityResponse>(routes.delete() +'/' + id);
  }

}
