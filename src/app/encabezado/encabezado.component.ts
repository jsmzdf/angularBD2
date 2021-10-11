import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  public usuario:any;
  constructor() { }
  
  ngOnInit(): void {
    console.log(localStorage.getItem("usuario"));
      this.usuario= (localStorage.getItem("usuario")!=null) ? localStorage.getItem("usuario"):"";
    
    
  }

}
