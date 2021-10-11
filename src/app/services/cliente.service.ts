import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '../models/Response';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  usuario:any=[];
  url:string ='http://localhost:3000/Cliente/';
  constructor(private http:HttpClient) { 
    this.GetUsuario();
  }
  
   GetUsuario() {
     
    return this.http.get<Response>(this.url);
    }

  
  }

