import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth2.service";
import { Router } from "@angular/router";

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
      this.router.navigate(['home'])
      console.log(auth)
    }).catch(err => console.log(err))
  }else{alert('Las contraseñas no coinciden.')}
   
  }

}