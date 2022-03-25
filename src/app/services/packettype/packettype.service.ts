import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IPacketType } from 'src/app/dtos/ipackettype';
import { environment } from 'src/environments/environment';


const apiBaseUrl = environment.apiBaseUrl +"/api";
const routes = {
  list : () => `${apiBaseUrl}/packettype`,
  add : () => `${apiBaseUrl}/packettype`,
  update : () => `${apiBaseUrl}/packettype`,
  delete : () => `${apiBaseUrl}/packettype`,
}

@Injectable({
  providedIn: 'root'
})
export class PackettypeService {

  form : FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    packettypeshortcode: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  packetType!: IPacketType;

  ELEMENT_DATA: IPacketType[] = [];
  dataSource!: MatTableDataSource<IPacketType>;

  constructor(private http: HttpClient) {
    this.packetType = {
      id: 0,
      name: null,
      packettypeshortcode:'',
      createdby: "",
      createdon: null,
      updatedby: '',
      updatedon: null,
      isactive: ''
    };
  }

  populateForm(row: IPacketType) {
    this.packetType.id = row['ID'];
    this.packetType.name = row['Name'];
    this.packetType.packettypeshortcode = row['PacketTypeShortCode'];
  }

  list(): Observable<IPacketType[]> {
    return this.http.get<IPacketType[]>(routes.list());
  }


  delete(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.delete(routes.delete() + "/" + id, {headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  update(data: IPacketType): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.put(routes.update() + "/" + data.id, data, {headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  add(itemData: any): Observable<any> {
    console.log(itemData);
    
    const token = localStorage.getItem('token');
    return this.http.post(routes.add(), itemData, {headers:new HttpHeaders({'Authorization':'Bearer '+ token})});
  }

  deleteFromMatDataTableSource(itemData: IPacketType) {
    const index = this.dataSource.filteredData.indexOf(itemData);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }

  addMatDataTableSource(itemData: IPacketType) {
    this.dataSource.data.push(itemData);
    this.dataSource._updateChangeSubscription();
  }

  updateMatDataTableSource(itemData: IPacketType) {
    const index = this.dataSource.filteredData.indexOf(itemData);
    this.ELEMENT_DATA.splice(index, 1);
    this.ELEMENT_DATA.push(itemData);
    this.dataSource._updateChangeSubscription();
  }
}
