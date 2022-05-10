import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountryResponse } from 'src/app/dtos/country-response';
import { environment } from 'src/environments/environment';

const apiBaseUrl = environment.apiBaseUrl + '/api';
const routes = {
  list: () => `${apiBaseUrl}/country`,
  insert: () => `${apiBaseUrl}/country`,
  update: () => `${apiBaseUrl}/country`,
  delete: () => `${apiBaseUrl}/country`
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

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

  list():Observable<CountryResponse>{
    return this.httpClient.get<CountryResponse>(routes.list());
  }
  add(formData:any):Observable<CountryResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.post<CountryResponse>(routes.insert(),formData);//,{headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  update(formData:any,id:any):Observable<CountryResponse>{

    const token = localStorage.getItem('token');
    return this.httpClient.put<CountryResponse>(routes.update() +'/'+ id,formData);
  }

  delete(id:any):Observable<CountryResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.delete<CountryResponse>(routes.delete() +'/' + id);
  }

}

