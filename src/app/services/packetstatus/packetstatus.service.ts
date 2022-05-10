import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PacketstatusResponse } from 'src/app/dtos/packetstatus-response';
import { environment } from 'src/environments/environment';

const apiBaseUrl = environment.apiBaseUrl + '/api';
const routes = {
  list: () => `${apiBaseUrl}/packetstatus`,
  insert: () => `${apiBaseUrl}/packetstatus`,
  update: () => `${apiBaseUrl}/packetstatus`,
  delete: () => `${apiBaseUrl}/packetstatus`
}

@Injectable({
  providedIn: 'root'
})
export class PacketstatusService {

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

  list():Observable<PacketstatusResponse>{
    return this.httpClient.get<PacketstatusResponse>(routes.list());
  }
  add(formData:any):Observable<PacketstatusResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.post<PacketstatusResponse>(routes.insert(),formData);//,{headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  update(formData:any,id:any):Observable<PacketstatusResponse>{

    const token = localStorage.getItem('token');
    return this.httpClient.put<PacketstatusResponse>(routes.update() +'/'+ id,formData);
  }

  delete(id:any):Observable<PacketstatusResponse>{
    const token = localStorage.getItem('token');
    return this.httpClient.delete<PacketstatusResponse>(routes.delete() +'/' + id);
  }

}
