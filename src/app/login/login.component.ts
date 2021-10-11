import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public lst:any;
  public usuario:string;
  public clave:string;
  constructor(private apiusuario:LoginService) { 
    this.usuario="";
    this.clave="";

  }
 
  ngOnInit(): void {

  }
  
  getUSuario(){
    
    this.apiusuario.GetUsuario().subscribe(response=>{
     
       this.lst=response.message[0].N_EMAIL;
       if(this.usuario==this.lst){
        localStorage.setItem("usuario",this.usuario);
        localStorage.setItem("clave",this.clave);
        window.location.reload();


       }
       
      
       
    })
  }

}
