import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent{


  loginUsuario:FormGroup;
  constructor(private afAuth:AngularFireAuth,private fb:FormBuilder,
     private toastr: ToastrService, private router: Router) {
    this.loginUsuario = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      pass: ['',[Validators.required, Validators.minLength(6)]],
    });
  }

  login(){
    const email = this.loginUsuario.value.email;
    const pass = this.loginUsuario.value.pass;
    sessionStorage.setItem('pass', pass);
    this.afAuth.signInWithEmailAndPassword(email, pass)
    .then((user:any) => {
      this.toastr.success('Ingreso Exitoso', 'Bienvenido', {timeOut: 2000},);
      this.afAuth.currentUser.then((user:any)=>{
        const usuario = user?.email
        console.log(usuario);
      })
      this.router.navigate(['/principal']);
    }).catch((error) => {
      this.toastr.error("Verifique las credenciales", "Error al iniciar sesión", {timeOut: 2000});
    })
  }


  accesoRapidoAdmin(){
    this.loginUsuario.setValue({
      email: "admin@admin.com",
      pass:"111111"
    });
    this.login();
  }

  accesoRapidoPaciente1(){
    this.loginUsuario.setValue({
      email: "usuario@usuario.com",
      pass:"333333"
    });
    this.login();
  }

  accesoRapidoEspecialista1(){
    this.loginUsuario.setValue({
      email: "invitado@invitado.com",
      pass:"222222"
    });
    this.login();
  }

}
