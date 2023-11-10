import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, collection, doc, getDocs, orderBy, query, setDoc } from '@angular/fire/firestore';
import { Mensaje } from '../Pages/chat-cuarto-a/chat-cuarto-a.component';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  allChatCuartoA: CollectionReference<DocumentData> = collection(this.firestore, 'ChatCuartoA');
  allChatCuartoB: CollectionReference<DocumentData> = collection(this.firestore, 'ChatCuartoB');

  constructor(public firestore: Firestore) { }

  getListadoChatCuartoA() {
    const ChatCuartoA = collection(this.firestore, 'ChatCuartoA');
    const order = query(ChatCuartoA, orderBy('fecha', 'desc'));
    return getDocs(order);
  }

  getListadoChatCuartoB() {
    const ChatCuartoB = collection(this.firestore, 'ChatCuartoB');
    const order = query(ChatCuartoB, orderBy('fecha', 'desc'));
    return getDocs(order);
  }

  enviarMensaje4A(mensaje:string, usuario:string) :Promise<void>{
    const fecha = new Date();

    // Obtiene el día, mes, año, hora y minutos
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Meses en JavaScript son 0-indexados, por eso se suma 1.
    const año = fecha.getFullYear().toString().slice(-2);
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');

    // Formatea la fecha y hora en el formato deseado
    const fechaFormateada = `${dia}/${mes} - ${hora}:${minutos}`;


    return new Promise((resolve, reject) => {
      const mensajes4A = doc(this.allChatCuartoA);
      setDoc(mensajes4A, {
        id: mensajes4A.id,
        email: usuario,
        mensaje: mensaje,
        fecha: fechaFormateada,
      })
        .then(() => {
          resolve(); // Se resuelve la promesa si la operación se completa correctamente
        })
        .catch((error) => {
          reject(error); // Se rechaza la promesa si ocurre un error durante la operación
        });
    });
  }

  enviarMensaje4B(mensaje:string, usuario:string) :Promise<void>{
    const fecha = new Date();

    // Obtiene el día, mes, año, hora y minutos
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Meses en JavaScript son 0-indexados, por eso se suma 1.
    const año = fecha.getFullYear().toString().slice(-2);
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');

    // Formatea la fecha y hora en el formato deseado
    const fechaFormateada = `${dia}/${mes} - ${hora}:${minutos}`;
    return new Promise((resolve, reject) => {
      const mensajes4B = doc(this.allChatCuartoB);
      setDoc(mensajes4B, {
        id: mensajes4B.id,
        email: usuario,
        mensaje: mensaje,
        fecha: fechaFormateada,
      })
        .then(() => {
          resolve(); // Se resuelve la promesa si la operación se completa correctamente
        })
        .catch((error) => {
          reject(error); // Se rechaza la promesa si ocurre un error durante la operación
        });
    });
  }

}
