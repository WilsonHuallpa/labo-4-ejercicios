import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  activeTab: 'log-in' | 'sign-up' = 'log-in';
  loginUsuario: FormGroup;
  signupusuario: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginUsuario = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.signupusuario = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

  }
  login(){
    const email = this.loginUsuario.value.correo;
    const password = this.loginUsuario.value.password;
    const storedUserJSON = localStorage.getItem('usuario');
    if (storedUserJSON !== null) {
      const storedUser = JSON.parse(storedUserJSON);
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        this.router.navigateByUrl('bienvenido');
      } else {
        this.router.navigateByUrl('error');
      }
    }else {
      console.log('No se encontró información del usuario');
    }
  
  }
  signup(){
    const email = this.signupusuario.value.correo;
    const password = this.signupusuario.value.password;
    const repetirPassword = this.signupusuario.value.repetirPassword;
    const usuario = {
      id: Date.now(), 
      email: email,
      password: password
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.activeTab = 'log-in';
  }
}
