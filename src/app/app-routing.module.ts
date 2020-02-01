import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavModule } from './components/sidenav/sidenav.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sidenav', component: SidenavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SidenavModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
