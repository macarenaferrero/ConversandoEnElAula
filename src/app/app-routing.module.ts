import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Pages/auth/auth.component';
import { SplashComponent } from './Pages/splash/splash.component';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { ChatCuartoAComponent } from './Pages/chat-cuarto-a/chat-cuarto-a.component';
import { ChatCuartoBComponent } from './Pages/chat-cuarto-b/chat-cuarto-b.component';

const routes: Routes = [
  {
    path: 'inicio', component: AuthComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'splash', component:SplashComponent
  },
  {
    path: 'principal', component: PrincipalComponent
  },
  {
    path: 'chatCuartoA', component: ChatCuartoAComponent
  },
  {
    path: 'chatCuartoB', component: ChatCuartoBComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
