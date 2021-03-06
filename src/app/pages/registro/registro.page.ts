import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth2.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public  email : string;
  public  name : string;
  public password : string;
  
  public password2 : string;

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
    if(this.password==this.password2){ 
      this.auth.register(this.email, this.password,this.name).then( auth => {
      this.router.navigate(['home']);
      console.log(auth);
    }).catch(err =>
    Swal.fire({
      icon: 'error',
      title: 'Se ha encontrado el siguiente '+ err,
      })
    );
  } else{
    Swal.fire({
      icon: 'error',
      title: 'Las contraseñas no coinciden.',
      });
    }
  }
}
