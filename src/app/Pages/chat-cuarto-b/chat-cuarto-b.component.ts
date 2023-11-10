import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../chat-cuarto-a/chat-cuarto-a.component';
import { ChatService } from 'src/app/services/chat.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-cuarto-b',
  templateUrl: './chat-cuarto-b.component.html',
  styleUrls: ['./chat-cuarto-b.component.scss'],
})
export class ChatCuartoBComponent  implements OnInit {
  mensaje!: string;
  listadoMensajesMostrar: Array<Mensaje> = new Array<Mensaje>();
  error:string="Puedes envíar mensajes de (0;21) carácteres";
  hayError:boolean=false;
  usuario:any;
  mensajeAMandar = new Mensaje();
  constructor(public chatService: ChatService, public afAuth: AngularFireAuth, public router:Router)
  {}

  ngOnInit() {
    this.afAuth.currentUser.then(user => {
      this.usuario = user?.email
      console.log(this.usuario);
    })

    setTimeout(() => {
      console.log("en oninit ");
      this.cargarMensajes();
    }, 1000);

  }

  mandarMensaje(){
    if (this.mensaje=="" || this.mensaje==null || this.mensaje.length>=21)
    {
      this.hayError=true;
    }else{
      this.chatService.enviarMensaje4B(this.mensaje, this.usuario);
      this.mensaje="";
      this.hayError=false;
    }
    this.cargarMensajes();
  }

  cargarMensajes(): void {
      this.listadoMensajesMostrar = [];
      this.chatService.getListadoChatCuartoB().then(resp => {
          resp.forEach((mensaje: any) => {
            var mensaje2: Mensaje = new Mensaje();
            mensaje2.email = mensaje.data().email;
            mensaje2.fecha = mensaje.data().fecha;
            mensaje2.mensaje = mensaje.data().mensaje;
            if(mensaje.data().email == this.usuario){
              mensaje2.siSoy=true;
              console.log(mensaje2);
            }else{
              mensaje2.siSoy=false;
            }
            this.listadoMensajesMostrar.push(mensaje2);
          })
      });
   }

   irASalas(){
    this.router.navigate(['principal']);
   }


  logOut(){
    this.afAuth.signOut().then(() => this.router.navigate([""]));
  }
}
