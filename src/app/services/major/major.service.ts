import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MajorResponse } from 'src/app/dtos/major-response';
import { environment } from 'src/environments/environment';

const apiBaseUrl = environment.apiBaseUrl + '/api';
const routes = {
  list: () => `${apiBaseUrl}/major`,
  insert: () => `${apiBaseUrl}/major`,
  update: () => `${apiBaseUrl}/major`,
  delete: () => `${apiBaseUrl}/major`
}

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    majorCode: new FormControl('', [Validators.required, Validators.minLength(4)]),
    mobileNo: new FormControl('', [Validators.required,Validators.minLength(10)]),
    address1: new FormControl(''),
    address2: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private httpClient: HttpClient) { }

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      majorCode: '',
      mobileNo: '',
      address1: '',
      address2: '',
      description: ''
    });
  }

  populateForm(selectedData)
  {
    this.form.setValue({'id':selectedData['ID'],'name': selectedData['Name']});
  }

  list():Observable<MajorResponse>{
    return this.httpClient.get<MajorResponse>(routes.list());
  }
  add(formData:any):Observable<MajorResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.post<MajorResponse>(routes.insert(),formData);//,{headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  update(formData:any,id:any):Observable<MajorResponse>{

    const token = localStorage.getItem('token');
    return this.httpClient.put<MajorResponse>(routes.update() +'/'+ id,formData);
  }

  delete(id:any):Observable<MajorResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.delete<MajorResponse>(routes.delete() +'/' + id);
  }

}
