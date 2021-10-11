import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Response} from '../models/Response';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuario:any=[];
  url:string ='http://localhost:3000/usuario';
  constructor(private http:HttpClient) { }
  GetUsuario() {
    return this.http.get<Response>(this.url);
    }

}
