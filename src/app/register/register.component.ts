import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Registro } from '../models/Registro';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  lado = 1;
  public registro:Registro=new Registro();
  usu:any;
  constructor() {
    
    
   }

  ngOnInit(): void {
   
  }

  validar(){
   

  }

}
