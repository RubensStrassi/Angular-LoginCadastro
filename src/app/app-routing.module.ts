import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: ()=> import("./home/home.module").then((m => m.HomeModule))
  },
  {
    path: "principal",
    loadChildren: ()=> import("./principal/principal.module").then((m => m.PrincipalModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
