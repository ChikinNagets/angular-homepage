import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatListModule } from '@angular/material';



@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatListModule
  ]
})
export class SidenavModule { }
