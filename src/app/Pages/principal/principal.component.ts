import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent  implements OnInit {
  sala: string="";
  constructor(public router:Router, private afAuth:AngularFireAuth) { }

  ngOnInit() {}

  a4B(){
    this.router.navigate(['chatCuartoB']);
  }
  a4A(){
    this.router.navigate(['chatCuartoA']);
  }


  logOut(){
    this.afAuth.signOut().then(() => this.router.navigate([""]));
  }
}
